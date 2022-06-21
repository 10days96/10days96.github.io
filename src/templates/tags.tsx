import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import BlogLayout from "../components/blogLayout"
import Seo from "../components/seo"

type DataProps = {
  allMarkdownRemark: {
    edges: {
      node: {
        fields: {
          slug: string
        }
        frontmatter: {
          title: string
        }
      }
    }
    totalCount: number
  }

  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Tags = ({ data, pageContext, location }: PageProps<DataProps>) => {

  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const siteTitle: string = data.site.siteMetadata.title
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`

  console.log(tag)

  return (
    <BlogLayout location={location} title={siteTitle}>
      <Seo title={tagHeader} />
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </BlogLayout>
  )
}

export default Tags

export const pageQuery = graphql`
  query TagPost(
    $tag: String
  ){
    site{
      siteMetadata{
          title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges{
        node{
          fields{
            slug
          }
          frontmatter{
            title
          }
        }
      }
    }
  }
`