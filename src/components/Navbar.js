import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} aria-current="page" to="/about">About</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" checked={props.mode==="dark"?true:false} onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.mode==="light"?{color:'Black'}:{color:'White'}}>{props.mode==="light"?"Enable":"Disable"} Dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};

Navbar.defaultProps = {
  title: "Set Title",
  aboutText: "Some Text Here"
};