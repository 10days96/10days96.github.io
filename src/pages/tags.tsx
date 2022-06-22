import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import kebabCase from "lodash.kebabcase"
import BlogLayout from "../components/blogLayout"
import Seo from "../components/seo"

type DataProps = {
  allMarkdownRemark: {
    group: {
      filedValue: string
      totalCount: number
    }
  }
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const TagsPage = ({ data, location }: PageProps<DataProps>) => {

  const title: string = data.site.siteMetadata.title
  const group = data.allMarkdownRemark.group

  return (
    <BlogLayout location={location} title={title}>
      <Seo title="all tags" />
      <div>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </BlogLayout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site{
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000){
      group(field: frontmatter___tags){
        fieldValue
        totalCount
      }
    }
  }
`