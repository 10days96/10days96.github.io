import React from "react"

type DataProps = {
    
}


const TableOfContents = ({content}) => {
    return(
        <div 
            className="table-of-content"
            dangerouslySetInnerHTML={{ __html: content}}
        />
    )
}

export default TableOfContents