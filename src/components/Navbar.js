import React from 'react'
import PropTypes from 'prop-types'
import App from '../App';
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  return (
    <div>
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Select">Select</Link>
        </li>
      </ul>
    </div>
    <div>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
    </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick = {props.clickedMode}id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Text}</label>
</div>
<div className={`form-check form-switch text-${props.red==='light'?'danger':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick = {props.clickedRed}id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.TextR}</label>
</div>
  </div>
</nav>
      
    </div>
  )
}


Navbar.propTypes ={
     title : PropTypes.string ,
     aboutText : PropTypes.string
     };
