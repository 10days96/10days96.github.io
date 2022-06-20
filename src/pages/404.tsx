// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, Page } from "gatsby"

import Seo from "../components/seo"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const NotFoundPage = ({data, location}: PageProps<DataProps>) => {
  const siteTitle: string = data.site.siteMetadata?.title || `Title`
  
  return(
    <div>
      <h1>{siteTitle}</h1>
      <Seo title="404: Not Found" />
      <h2>404: Not Found</h2>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`