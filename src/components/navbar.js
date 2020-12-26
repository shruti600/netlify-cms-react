import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar" style={{marginBottom:'20px'}}>
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/about">About</Link>
        </div>
    )
}

export default Navbar