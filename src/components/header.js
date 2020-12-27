import React from "react"
import "./components.css"
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header uk-flex uk-flex-between">
            <h2 style={{color:'yellow', width:'70%'}}>Content Management System</h2>
            <div className="uk-flex" style={{justifyContent:'space-between', width:'20%'}}>
                <h5 style={{color:'yellow', marginTop:'15px'}}><Link to="/features" style={{color:'yellow', textDecoration:'none'}}>Features</Link></h5>
                <h5 style={{color:'yellow', marginTop:'15px', alignItems:'center'}}><Link to="/" style={{color:'yellow', textDecoration:'none'}}>Home</Link></h5>
                <h5 style={{marginTop:'15px'}}><Link to="/about" style={{color:'yellow', textDecoration:'none'}}>About</Link></h5>
            </div>
        </div>
    )
}

export default Header