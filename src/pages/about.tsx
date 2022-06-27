
import * as React from "react"
import { PageProps, graphql } from "gatsby"

import AboutLayout from "../components/aboutLayout"
import AboutProfile from "../components/aboutProfile"
import AboutWorkInfo from "../components/aboutWorkInfo"

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
    <AboutLayout title={title} location={location}>
      <AboutProfile />
      <AboutWorkInfo/>
    </AboutLayout>
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
