import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import DevTools from '../DevTools';

const Navigation = props => (
  <div>
    <nav className="navbar navbar-expand navbar-light bg-light">
      <Link className="navbar-brand h1" to="/">Countries.js</Link>
      <div className="navbar">
        <ul className="navbar-nav">
          <li><Link to="/countries" className="nav-link">Countries</Link></li>
          <li><Link to="/continents" className="nav-link">Continents</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
    <div className="container-fluid">
      {props.children}
    </div>
    <DevTools />
  </div>
);

export default Navigation;