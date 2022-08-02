// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import kebabCase from "lodash.kebabcase"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"

type DataProps = {
   site: {
      siteMetadata: {
         title: string
      }
   },
   allMarkdownRemark: {
      nodes: {
         frontmatter: {
            tags: Array<string>
         }
      }
   }
}

const BlogIndex = ({ data, location }: PageProps<DataProps>) => {
   const sitleTitle: string = data.site.siteMetadata?.title || `Title`
   const posts: any = data.allMarkdownRemark.nodes

   if (posts.length === 0) {
      return (
         <Layout location={location} title={sitleTitle}>
            <Seo title="All posts" />
            <Bio />
            <p>
               No blog posts found. Add markdown posts to "content/blog" (or the
               directory you specified for the "gatsby-source-filesystem" plugin in
               gatsby-config.js).
            </p>
         </Layout>
      )
   }


   return (
      <Layout location={location} title={sitleTitle}>
         <Sidebar />
         <Seo title="All posts" />
         <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
               const title = post.frontmatter.title || post.fields.slug
               const postTags = post.frontmatter.tags
               // 태그가 5개 이상이 된다면...?
               const color = ['#F4E0D9', '#F0ECE1', '#DAE4CC', '#ACCACC', '#A3B5C1', '#D3D3D3'];
               let color_index = 0;

               return (
                  <li key={post.fields.slug}>
                     <article
                        className="post-list-item"
                        itemScope
                        itemType="http://schema.org/Article"
                     >
                        <header>
                           <h2>
                              <Link to={post.fields.slug} itemProp="url">
                                 <span itemProp="headline">{title}</span>
                              </Link>
                           </h2>
                           <div className="tag-group">
                              {postTags ? postTags.map(tag => (
                                 <Link to={`/tags/${kebabCase(tag)}`} className="tag" style={{backgroundColor:`${color[color_index++]}`}}>{kebabCase(tag)}</Link>
                              )) : null}
                           </div>
                           <small>{post.frontmatter.data}</small>
                        </header>
                        <section>
                           <p
                              dangerouslySetInnerHTML={{
                                 __html: post.frontmatter.description || post.excerpt,
                              }}
                              itemProp="description"
                           />
                        </section>
                     </article>
                  </li>
               )
            })}
         </ol>
      </Layout>
   )

}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`