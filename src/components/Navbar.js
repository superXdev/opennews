import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
		  <div className="container">
		    <a className="navbar-brand" href="#">OpenNews</a>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarNavDropdown">
		      <ul className="navbar-nav ml-auto">
		        <li className="nav-item">
		          <NavLink exact className="nav-link" to="/">Home</NavLink>
		        </li>
		        <li className="nav-item">
		          <NavLink className="nav-link" to="/cnn">CNN</NavLink>
		        </li>
		        <li className="nav-item">
		          <NavLink className="nav-link" to="/kompas">Kompas</NavLink>
		        </li>
		        <li className="nav-item">
		          <NavLink className="nav-link" to="/liputan6">Liputan6</NavLink>
		        </li>
		        <li className="nav-item">
		          <NavLink className="nav-link" to="/stats">Statistics</NavLink>
		        </li>
		        <li className="nav-item">
		          <a href="https://opennewsapi.herokuapp.com/" className="btn btn-outline-warning ml-2 text-bold">API docs</a>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
	)
}

export default Navbar