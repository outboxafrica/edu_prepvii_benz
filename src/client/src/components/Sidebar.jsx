import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Sidebar extends Component {
    render() {
        const closeMenu=()=>{
            document.querySelector(".sidebar").classList.remove("open");
          }
        return (
            <React.Fragment>
             
                <aside className="sidebar">
      <h2>EDU-QUESTIONS</h2>
      <button className="sidebarclosebutton" onClick={closeMenu}>X</button>
     <div>
     <ul>
       <li><Link to="">AboutT</Link></li>
       <li><Link to="">Questions</Link></li>
       <li><Link to="">About</Link></li>
       <li><Link to="">Users</Link></li>
     </ul>
     </div>
    </aside>
    
            </React.Fragment>
        )
    }
}

