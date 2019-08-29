import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'
//{Link is another component. It comes from the react-router-dom library. It is referenced in the className "nav-link" container}

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>"Loving care when you're not there." -Kennel Jenner</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/animals">Animals</Link></li>
            <li><Link className="nav-link" to="/locations">Locations</Link></li>
            <li><Link className="nav-link" to="/employees">Employees</Link></li>
            <li><Link className="nav-link" to="/owners">Owners</Link></li>
          </    ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;