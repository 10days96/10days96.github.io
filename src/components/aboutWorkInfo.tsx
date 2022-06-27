import * as React from "react"
import { PageProps,graphql, useStaticQuery } from "gatsby"

type DataProps = {
  site:{
    siteMetadata:{
      introduce: string
    }
  }
}

const AboutWorkInfo = () => {

  const data:DataProps = useStaticQuery(graphql`
      query{
        site{
          siteMetadata{
            introduce
          }
        }
      }
  `)

  const introduce:string = data.site.siteMetadata.introduce

  return (
      <div>
        <h2>Introduce</h2>
        <p>{introduce}</p>
        <h2>Work Experience</h2>
        <h2>Skill</h2>
        <li>Front-End: javascript, Typescript, React, HTML/CSS</li>
        <li>Back-End: Flask</li>
        <li>AI: python(pytorch)</li>
        <li>Algorithm: python, C++</li>
        <h2>Education</h2>
        <li>2016.03-2020.02 숭실대학교 소프트웨어학부 학사 졸</li>
        <li>2020.08-2022.08 숭실대학교 컴퓨터학과 석사 졸 예정</li>
      </div>
      
  )
}

export default AboutWorkInfo
