import React from 'react';
import {NavLink} from 'react-router-dom'
import '../../CSS/Header.css'
const Menubar = () => {
    return (
        <div classNameName='menubar'>
<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
  <div className="container">
    <NavLink  className="navbar-brand" to="/home"> <span className='app'>App</span><span className='lab'>Lab</span>  </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink activeClassName="menu_Item" className="nav-link"  to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_Item" className="nav-link" to="/keyFeatures">Key Features</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_Item"  className="nav-link" to="/pricing">Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_Item"  className="nav-link" to="/testimonial">Testiminial</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName="menu_Item" className="nav-link" to="/faq">FAQ</NavLink>
        </li>
        <li>
        <button className='btn_get_started mt-3 mt-md-0'> Try for free </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>
            
    );
};

export default Menubar;