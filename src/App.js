import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Profile from './components/screens/Profile'
import Singup from './components/screens/Singup'

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
      <Route path="/singup">
        <Singup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default App;
