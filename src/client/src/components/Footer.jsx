import React from 'react'
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'
export default function Footer() {
    return (
        <Router>
            <footer className="footer">
      <p>&copy; Team Benz</p>
      <Link to="#">Stack-like App</Link>
    </footer>
     
        </Router>
    )
}
