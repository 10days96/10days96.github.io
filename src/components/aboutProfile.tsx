import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

type Author = {
    name: string
    summary: string    
}

type Social = {
    email: string
    github: string
    blog: string
}

const AboutProfile = () =>{

    const data = useStaticQuery(graphql`
    query userInfoQuery{
        site {
          siteMetadata {
            author {
              name
              summary
            }
            social {
              email
              github
              blog
            }
          }
        }
      }
    `)
    
    
    const author: Author = data.site.siteMetadata.author
    const social: Social = data.site.siteMetadata.social
    const contact: {[key: string]: string} = {"email": social.email, "github": social.github, "blog": social.blog}
    
    return(
        <div>
            <h1 className="about-header">
                안녕하세요 이현수 입니다👩‍💻
            </h1>
            <p>
                {author.summary}
            </p>
            <div className="about-profile">
                <StaticImage className="about-profile-img" 
                    src="../images/dog.png"
                    alt="Profile image"
                    layout="fixed"
                    width={200}
                    height={200}
                />
                <div className="about-contact">
                    <h3>Contact</h3>
                    {
                        Object.entries(contact).map(([key, value]) => {
                            return(
                                <li><strong>{key}</strong> : <a href={value}>{value}</a></li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutProfile