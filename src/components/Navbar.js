import React,{useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { UserContext } from '../App';
var { SocialIcon } = require('react-social-icons');

const Navbar=()=>{
    const{state,dispatch}=useContext(UserContext)
    const history=useHistory()
    const renderList=()=>{
    if(state){
        return[
            <li><Link to="/profile">Profile</Link></li>,
            <li><Link to="/create">Create Post</Link></li>,
            <li><Link to="/myfollwingpost">My following Post</Link></li>,
            <li>
            <button className="btn #c62828 red darken-3" onClick={()=>{
                localStorage.clear()
                dispatch({type:"CLEAR"})
                history.push('/signin')  //login
            }}>
            Logout
            </button>
            </li>
        ]
    }else{
        return[
        <li><Link to="/login">login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
        ]
    }
}
    return(
        <nav>
            <div className="nav-wrapper white">
                <Link to={state?"/":"/login"} className="brand-logo left" >Instagram</Link>
                <Link to={state?"/":"/login"} ><SocialIcon network ="instagram" style={{left:"110px",fgColor:"#8a3ab9"}}/>)</Link>;
                <ul id="nav-mobile" className="right">
                    {renderList()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
