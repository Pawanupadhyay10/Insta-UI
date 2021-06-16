import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import {useParams} from 'react-router-dom'

const UserProfile= () => {
    const [userProfile, setProfile] = useState(null)
    const { state, dispatch } = useContext(UserContext)
    const {userid}=useParams()
    const [showfollow, setShowFollow]=useState(state?!state.following.includes(userid):true)
    //console.log(userid)
     useEffect(() => {
         fetch(`/user/${userid}`, {
             headers: {
                 "Authorization": "Bearer" + localStorage.getItem("jwt")
             }
         }).then(res => res.json())
             .then(result => {
                //  console.log(result)
                setProfile(result)
             })
     }, [])

     const followUser=()=>{
         fetch('/follow', {
             method:"put",
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": "Bearer" + localStorage.getItem("jwt")
             },
             body: JSON.stringify({
                 followId:userid
             })
         }).then(res => res.json())
             .then(data => {
                 //console.log(data)
                 dispatch({ type: "UPDATE", payload:{following:data.following,followers:data.followers}})
                 localStorage.setItem("user",JSON.stringify(data))
                 setProfile((prevState) =>{
                    return{
                        ...prevState,
                        user:{
                            ...prevState.user,
                        followers:[...prevState.user.followers,data._id]
                    }
                }
                 })
                 setShowFollow(false)
             })
     }
     const unfollowUser=()=>{
         fetch('/unfollow', {
             method:"put",
             headers: {
                 "Content-Type": "application/json",
                 "Authorization": "Bearer" + localStorage.getItem("jwt")
             },
             body: JSON.stringify({
                 followId:userid
             })
         }).then(res => res.json())
             .then(data => {
                 console.log(data)
                 dispatch({ type: "UPDATE", payload:{following:data.following,followers:data.followers}})
                 localStorage.setItem("user",JSON.stringify(data))
                 setProfile((prevState) =>{
                     const newFollower=prevState.user.followers.filter(item=>item!==data._id)
                    return{
                        ...prevState,
                        user:{
                            ...prevState.user,
                            followers:newFollower
                           }
                    }
                 })
                 setShowFollow(true)
             })
     }
    return (
          <>
        { userProfile ? 
                <div style={{ maxWidth: '550px', margin: "0px auto" }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: "18px 0px",
                        borderBottom: "1px solid grey"
                    }}>
                        <div>
                            <img style={{ width: "160px", height: "160px", borderRadius: "80%" }}
                                src={userProfile.user.pic} />
                        </div>
                        <div>
                            <h4>{userProfile.user.name}</h4>
                            <h4>{userProfile.user.email}</h4>
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: "108%" }}>
                                <h6>{userProfile.posts.length}</h6>
                                <h6>{userProfile.user.followers.length}</h6>
                                <h6>{userProfile.user.following.length}</h6>
                            </div>
                            {showfollow?
                            <button style={{
                                margin:"10px"
                            }} className="btn waves-effect waves-light #1565c0 blue darken-3 darken-1" onClick={() => followUser()}>
                                Follow
                            </button>
                            :
                                <button style={{
                                    margin: "10px"
                                }} className="btn waves-effect waves-light #1565c0 blue darken-3 darken-1" onClick={() => unfollowUser()}>
                                UnFollow
                            </button>
                             }
                        </div>
                    </div>
                    <div className="gallery">
                        {userProfile.posts.map(item => {
                            return (
                                <img key={item._id} className="item" src={item.photo} alt={item.title} />
                            )
                        })
                        }
                    </div>
                </div>
        :<h2>loading...</h2>}
        </>
    )
}

export default  UserProfile