//creating this page to post a picture 
import React from 'react'
const CreatePost=()=>{
    return(
        <div className="card input-filled"
        style={{         /*styling the post create page*/
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}
        >

            <input type="text" placeholder="title"/>
            <input type ="text" placeholder="body"/>
            <div className="file-field input-field">
                <div className="btn  #1e88e5 blue darken-1">
                    <span>Upload Image</span>
                    <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                   <input className="file-path validate" type="text"/>
               </div>
            </div>
            <button className="btn waves-effect waves-light #1565c0 blue darken-3 darken-1 ">Submit Post
                </button>
        </div>
    
    )
}
export default CreatePost