import React from 'react'
import { Link } from 'react-router-dom'

const Singup = () => {
    return (
        <div className="Mycard">
            <div className="card auth-card">
                <h2>Instagram</h2>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="email" />
                <input type="text" placeholder="passward" />
                <button className="btn waves-effect waves-light">SingUp
                </button>
                <h5><Link to="/login">Already have an account Login please?</Link></h5>
            </div>
        </div>
    )
}

export default Singup
