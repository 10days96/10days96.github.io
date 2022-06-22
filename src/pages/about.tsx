// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const About = ({ data, location }: PageProps<DataProps>) => {

  const title: string = data.site.siteMetadata.title

  return (
    <Layout title={title} location={location}>
      <div className="bio">
        <StaticImage
          src="../images/dog.png"
          alt="Profile image"
          layout="fixed"
        />
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }
  }
`
