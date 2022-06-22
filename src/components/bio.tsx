/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import profile from "../images/dog.png"
// import { StaticImage } from "gatsby-plugin-image"

type Author = {
    name: string
    summary: string
}

type Social = {
    twitter: string
}

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
            siteMetadata {
                author {
                name
                summary
                }
                social {
                twitter
                }
             }
             }
         }
    `)

    const author: Author = data.site.siteMetadata?.author

    return (
        <div className="bio">
            <img
                className="bio-avatar"
                src={profile}
                width={100}
                height={100}
                alt="Profile picture"
            />
            {author?.name && (
                <p>
                    <strong>{author.name}</strong>
                    {` `}
                </p>
            )}
        </div>
    )
}

export default Bio