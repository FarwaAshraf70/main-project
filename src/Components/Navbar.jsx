import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid backgroundimg">
    <Link className="navbar-brand" to="/">jarvis</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/employees">Employees</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactus" role="button">
           Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addnewemployee" role="button">
           AddNewEmployee
          </Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/emp" role="button">
          Emp
          </Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/student" role="button">
          students
          </Link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
