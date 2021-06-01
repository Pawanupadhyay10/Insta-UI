import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
//  '/' is a default router 
function App() {
  return (
    <BrowserRouter>
      <Navbar />   
    <Route exact path="/"> 
      <Home/>
    </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
    </BrowserRouter>
  );
}

export default App;
