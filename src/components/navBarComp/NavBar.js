import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm  ">
            <div className="container-fluid justify-content-start">
                
                <Link className="navbar-brand" to="/">Quickie </Link>
            </div>
        </nav>
    )
}

export default NavBar
