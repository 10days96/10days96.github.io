import * as React from "react"
import { PageProps, Link, graphql, useStaticQuery } from "gatsby"
import kebabCase from "lodash.kebabcase"
import Bio from "../components/bio"

type DataProps = {
   allMarkdownRemark: {
      group: {
         fieldValue: string
         totalCount: number
      },
      nodes: {
         id:string
      }
   }
}


const Sidebar = ({ data, location }: PageProps<DataProps>) => {

   const { allMarkdownRemark: { group, nodes } } = useStaticQuery(
      graphql`
         query{
            allMarkdownRemark(limit: 2000){
               group(field: frontmatter___tags){
                 fieldValue
                 totalCount
               }
               nodes{
                  id
               }
             }
         }
      `
   )

   return (
      <div className="sidebar">
         <Bio />
         <div>
            <h6>📚 TOTAL {nodes.length} POSTS</h6>
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
      </div>
   );
}

export default Sidebar
