/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 
type Author= {
    name: string
    summary: string
}

type Social = {
    twitter:string
}

 const Bio = () =>{
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
 
     const author:Author = data.site.siteMetadata?.author
     const social:Social  = data.site.siteMetadata?.social
 
     return(
         <div className="bio">
             <StaticImage
                 className="bio-avatar"
                 layout="fixed"
                 formats={["auto", "webp", "avif"]}
                 src="../images/profile-pic.png"
                 width={50}
                 height={50}
                 quality={95}
                 alt="Profile picture"
             />
             {author?.name && (
             <p>
             Written by <strong>{author.name}</strong> {author?.summary || null}
             {` `}
             <a href={`https://twitter.com/${social?.twitter || ``}`}>
                 You should follow them on Twitter
             </a>
             </p>
         )}
         </div>
     )
 }
 
 export default Bio