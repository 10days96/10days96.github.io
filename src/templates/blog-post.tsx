// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import kebabCase from "lodash.kebabcase"
import Utterances from "../components/Utterance"

import BlogLayout from "../components/blogLayout"
import Seo from "../components/seo"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import TableOfContents from "../components/postTableContents"

deckDeckGoHighlightElement();

type DataProps = {
  markdownRemark: {
    tableOfContents:string
    frontmatter: {
      title: string
      date: string
      tags: Array<string>
    }
    fields: {
      slug: string
    }
    html: string
  }
  excerpt: string
  site: {
    siteMetadata: {
      title: string
    }
  }
}


const BlogPostTemplate = ({ data, location }: PageProps<DataProps>) => {
  const postTitle: string = data.markdownRemark.frontmatter.title
  const postDate: string = data.markdownRemark.frontmatter.date
  const postTags: Array<string> = data.markdownRemark.frontmatter.tags
  const postExcerpt: string = data.excerpt
  const postHtml: string = data.markdownRemark.html
  const siteTitle: string = data.site.siteMetadata.title || `Title`
  const tableOfContents:string = data.markdownRemark.tableOfContents
  const { previous, next }: any = data

  const color = ['#F4E0D9', '#F0ECE1', '#DAE4CC', '#ACCACC', '#A3B5C1', '#D3D3D3'];
  let color_index = 0;

  return (
    <BlogLayout location={location} title={siteTitle}>
      <Seo
        title={postTitle}
        description={postTitle || postExcerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{postTitle}</h1>
          <div className="tag-group">
          {postTags ? postTags.map(tag => (
              <Link to={`/tags/${kebabCase(tag)}`} className="tag" style={{backgroundColor:`${color[color_index++]}`}}>{kebabCase(tag)}</Link>
          )) : null}
          </div>
          <div className="date">
            <span>{postDate}</span>
          </div>
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: postHtml }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </footer>
        <Utterances repo='10days96/blog-comment' theme='github-light' />
      </article>
      <TableOfContents content={tableOfContents} />
    </BlogLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
      tableOfContents
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`