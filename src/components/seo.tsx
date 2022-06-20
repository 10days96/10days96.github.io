import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Dataprops = {
  description: string
  lang: string
  meta: string
  title: string
}


const Seo = ({description, lang, meta, title}: Dataprops) => {

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                siteMetadata {
                    title
                    description
                    social {
                    twitter
                    }
                }
                }
            }
        `
    )

    const metaDescription:string = description || site.siteMetadata.description
    const defaultTitle:string = site.siteMetadata?.title

    return(
        <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
    )
}

Seo.defaultProps = {
    lang: `kr`,
    meta: [],
    description: ``,
  }
  
  Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
  }
  
  export default Seo