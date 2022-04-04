import React, {Fragment} from "react"
import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function Navbar(){
    return <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light ml-auto">
  <div className="container-fluid">
  <Link class="nav-link active" aria-current="page" to="/">College Hub</Link>
    
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          
        </li>

        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/admin">Admin Login</Link>
        </li>
        </ul>
  </div>
  </div>
</nav>
</div>
}

export default Navbar