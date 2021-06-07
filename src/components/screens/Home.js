import React,{useState,useEffect} from 'react'

const Home = () => {
   const[data,setData]=useState([])
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer"+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            //console.log(data)
            setData(result.posts)
        })
    },[])
    return (
        <div className="home">
            {
                data.map(item=>{
                    return(
                    <div className="card home-card">
                      <h4>{item.PostedBy}</h4>
                      <div className="card-image">
                           <img src={item.photo}/>
                      </div>
                        <div className="card-content">
                         <i className="material-icons" style={{color:"red"}}>favorite</i>
                          <h6>{item.title}</h6>
                          <p>{item.body}</p>
                          <input type="text" placeholder="add a comment"/>
                         </div>
                    </div>
                )
            })
       }
           
// =======
//             <div className="card home-card">
//                 <h4>Cinch Duk</h4>
//                  <div className="card-image">
//                     <img src="https://images.unsplash.com/photo-1485168235370-337880675122?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF1dHJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
//                  </div>
//                  <div className="card-content">
//                     <i class="material-icons" style={{color:"red"}}>favorite</i>
//                    <h6>title</h6>
//                    <p>this is amazing post</p>
//                    <input type="text" placeholder="add a comment"/>
//                  </div>
//             </div>
//             <div className="card home-card">
//                 <h4>Cinch Duk</h4>
//                 <div className="card-image">
//                     <img src="https://images.unsplash.com/photo-1485168235370-337880675122?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF1dHJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
//                 </div>
//                 <div className="card-content">
//                     <i className="material-icons" style={{ color: "red" }}>favorite</i>
//                     <h6>title</h6>
//                     <p>this is amazing post</p>
//                     <input type="text" placeholder="add a comment" />
//                 </div>
//             </div>
//             <div className="card home-card">
//                 <h4>Cinch Duk</h4>
//                 <div className="card-image">
//                     <img src="https://images.unsplash.com/photo-1485168235370-337880675122?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF1dHJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
//                 </div>
//                 <div className="card-content">
//                     <i className="material-icons" style={{ color: "red" }}>favorite</i>
//                     <h6>title</h6>
//                     <p>this is amazing post</p>
//                     <input type="text" placeholder="add a comment" />
//                 </div>
//             </div>
//         </div>
//     )
//     }
// >>>>>>> master

    </div>
)
}
               
                       
export default Home
////https://images.unsplash.com/photo-1485168235370-337880675122?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF1dHJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"