import React from 'react'
import {Link} from 'react-router-dom'
var { SocialIcon } = require('react-social-icons');

const Navbar=()=>{
    return(
        <nav>
            <div className="nav-wrapper white">
                <Link to="/" className="brand-logo left" >Instagram</Link>
                <Link to='/'><SocialIcon network ="instagram" style={{left:"110px",fgColor:"#8a3ab9"}}/>)</Link>;
                <ul id="nav-mobile" className="right">
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/create">Create Post</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
