import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="Mycard">
            <div className="card auth-card">
               <h2>Instagram</h2>
               <input type="text" placeholder="email"/>
               <input type="text" placeholder="passward" />
                <button className="btn waves-effect waves-light">Login
                </button>
                <h5><Link to="/singup">Don't have an account Singup please?</Link></h5>
            </div>
        </div>
    )
}

export default Login
