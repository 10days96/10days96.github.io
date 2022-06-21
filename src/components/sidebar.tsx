import * as React from "react"
import { PageProps, Link, graphql, useStaticQuery } from "gatsby"

type DataProps = {
   allMarkdownRemark: {
      nodes: {
         frontmatter: {
            tags: Array<string>
         }
      }
   }
}



const Sidebar = () => {

   const data = useStaticQuery(graphql`
      query TagQuery{
         allMarkdownRemark {
            nodes {
              frontmatter {
                tags
              }
            }
          }
      }
   `)

   return (
      <div className="sidebar">
         <span>
            sidebar
         </span>
      </div>
   );
}

export default Sidebar