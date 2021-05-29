import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(
        <nav>
            <div className="nav-wrapper white">
                <Link to="/" className="brand-logo left">Instagarm</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/singup">Singup</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
