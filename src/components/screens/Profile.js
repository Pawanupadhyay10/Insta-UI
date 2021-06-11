import React,{useEffect,useState,useContext} from 'react'
import{UserContext} from '../../App'

const Profile = () => {
    const[mypics,setPics]=useState([])
    const {state,dispatch}=useContext(UserContext)
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer"+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            //  console.log(result)
         setPics(result.mypost)
        })
    },[])
    useEffect(()=>{
        if(image){
            const data = new FormData()
            data.append("file", image)
            data.append("upload_preset", "Insta-clone")
            data.append("cloud name", "panni")
            fetch("	https://api.cloudinary.com/v1_1/panni/image/upload", {
                method: "post",
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    // localStorage.setItem("user",JSON.stringify({...state,pic:data.url}))
                    // dispatch({type:"UPDATEPIC",payload:data.url})
                    fetch('/updatepic',{
                        method:"put",
                        headers:{
                            "Content-Type":"application/json",
                            "Authorization": "Bearer" + localStorage.getItem("jwt")
                        },
                        body:JSON.stringify({
                            pic:data.url
                        })
                    }).then(res => res.json())
                    .then(result=>{
                        console.log(result)
                        localStorage.setItem("user", JSON.stringify({ ...state, pic:result.pic }))
                        dispatch({ type: "UPDATEPIC", payload: result.pic })
                        window.location.reload()
                    })
                    
                })
                .catch(err => {
                    console.log(err)
                })
        }
    })
    const updatephoto=(file)=>{
        setImage(file)
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "Insta-clone")
        data.append("cloud name", "panni")
        fetch("	https://api.cloudinary.com/v1_1/panni/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div style={{maxWidth:'550px',margin:"0px auto"}}>
            <div style={{
                display:'flex',
                justifyContent:'center',
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80%"}}
                        src={state?state.pic:"loading"}/>
                    <div>
                        <div className="file-field input-field">
                            <div className="btn  #1e88e5 blue darken-1">
                                <span>update pic</span>
                                <input type="file" onChange={(e) => updatephoto(e.target.files[0])} />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{margin:'15px'}}>
                    <h4>{state?state.name:"loading"}</h4>
                    <h4>{state?state.email:"loading"}</h4>
                    <div style={{display:'flex',justifyContent:'space-between',width:"108%"}}>
                        <h6>{mypics.length}</h6>
                        <h6>{/*state?state.followers.length:"0"*/} followers</h6>
                        <h6>{/*state?state.following.length:"0"*/} following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                    {mypics.map(item=>{
                            return(
                             <img key={item._id} className="item" src={item.photo} alt={item.title}/>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default Profile
