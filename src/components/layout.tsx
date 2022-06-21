// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import {PageProps, Link } from "gatsby"
import beaver from "../images/beaver.png"

type DataProps = {
    title: string
}

const Layout = ({ location, title, children }: PageProps<DataProps>) =>{
    const rootPath:string  = `${__PATH_PREFIX__}/`
    const isRootPath:Boolean = location.pathname === rootPath
    let header

    if(isRootPath){
        header = (
            <h1 className="main-heading">
                <Link to="/">{title}</Link>
            </h1>
        )
    } else {
        header = (
            <Link className="header-link-home" to="/">
                {title}
            </Link>
        )
    }

    return(
        <div className="global-wrapper" data-is-root-path={isRootPath}>
            <header className="global-header">{header}</header>
            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()}, Built with
                {`   `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
                {`    `}
                <img src={beaver} className="beaver"/>
                {`   `}
                <a href="https://github.com/blackbeaver37">BlackBeaver</a>
            </footer>
        </div>
    )
}

export default Layout