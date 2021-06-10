import React,{useEffect,createContext,useReducer,useContext} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import {reducer,initialState} from './reducers/userReducer'
import UserProfile from './components/screens/UserProfile'
import Subscribepost from './components/screens/Subscribepost'
//  '/' is a default router 
export const UserContext=createContext()

const Routing=()=>{
  const history=useHistory()
  const{state,dispatch}=useContext(UserContext)
  useEffect(()=>{
     const user=JSON.parse(localStorage.getItem("user"))
     if(user){
       dispatch({type:"USER",payload:user})
       //history.push('/')
      }else{
        history.push('/login')
      }
  },[])
  return(
    <Switch>
     <Route exact path="/"> 
      <Home/>
    </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
      <Route path="/profile/:userid">
        <UserProfile />
      </Route>
      <Route path="/myfollwingpost">
        <Subscribepost />
      </Route>
   </Switch>
  )
}

function App() {
  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Navbar />   
      <Routing/>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
