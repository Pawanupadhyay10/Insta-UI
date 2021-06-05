import React,{useState}from 'react'
import { Link ,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
    const history=useHistory()
    const[name,setName]=useState("")
    const[passward,setPassward]=useState("")
    const[email,setEmail]=useState("")
    const PostData=()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           M.toast({html:"invalid email",classes:"#c62828 red darken-3"})
           return 
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                passward,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html:data.error,classes:"#c62828 red darken-2"})
            }
            else{
                M.toast({html:data.msg,classes:"#43a047 green darken-1"})
                history.push('/login')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="Mycard">
            <div className="card auth-card">
                <h2>Instagram</h2>
                <input type="text" placeholder="username" 
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder="passward" 
                value={passward}
                onChange={(e)=>setPassward(e.target.value)}/>
                <button className="btn waves-effect waves-light #1565c0 blue darken-3 darken-1"
                onClick={()=>PostData()}>
                    SignUp
                </button>
                <h5><Link to="/login">Already have an account Login please?</Link></h5>
            </div>
        </div>
    )
}

export default Signup
