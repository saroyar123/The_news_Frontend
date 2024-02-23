import React from 'react'
import { Link } from 'react-router-dom'
import "./PageNotFound.css"

const PageNotFound = () => {
    return (
        <div className='Page_not_found'>
            <div>
                <h1>PageNotFound</h1>
            </div>
            <div>
             <Link to={"/"} >Back to Home</Link>
            </div>
        </div>
    )
}

export default PageNotFound