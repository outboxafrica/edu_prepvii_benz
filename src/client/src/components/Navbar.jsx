import React, { Component } from 'react'
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './SignUp'
export default class Navbar extends Component {
   
    render() {
        const openMenu=()=>{
            document.querySelector(".sidebar").classList.add("open");
          }

          const closeMenu=()=>{
            document.querySelector(".sidebar").classList.remove("open");
          }
          
        return (
            <Router>
                <header className="header">
      <div className="logo">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <h1>Stack-Like</h1>
      </div>
      <div className="signlinks"> 
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
         
      </div>  
    </header> 
    <aside className="sidebar">
      <h2>Topics</h2>
      <button className="sidebarclosebutton" onClick={closeMenu}>X</button>
     <div>
     <ul>
       <li><Link to="/">HOME</Link></li>
       <li><Link to="">Questions</Link></li>
       <li><Link to="">Responses</Link></li>
     </ul>
     </div>
    </aside>
    <Switch>
    <Route path exact='/'><Home/></Route>
      <Route path='/login'><Login/></Route>
      <Route path='/signup'><Signup/></Route>
      
    </Switch>
            </Router>
        )
    }
}
