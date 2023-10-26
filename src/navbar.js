import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState({ name: 'Dashboard', icon: 'fa fa-dashboard' });
  const [isLoginDropdownOpen, setLoginDropdownOpen] = useState(false);

  const handleLinkClick = (linkName, iconClass) => {
    setSelectedLink({ name: linkName, icon: iconClass });
  };

  const toggleLoginDropdown = () => {
    setLoginDropdownOpen(!isLoginDropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="selected-link">
        <i className={selectedLink.icon}></i> {selectedLink.name}
      </div>
      <ul>
        <li onClick={() => handleLinkClick('Dashboard', 'fa fa-dashboard')}>
          <i className="fa fa-dashboard"></i> Dashboard
        </li>
        <li onClick={() => handleLinkClick('Product', 'fa fa-product-hunt')}>
          <i className="fa fa-product-hunt"></i> Product
        </li>
        <li onClick={() => handleLinkClick('Customers', 'fa fa-users')}>
          <i className="fa fa-users"></i> Customers
        </li>
        <li onClick={() => handleLinkClick('Income', 'fa fa-money')}>
          <i className="fa fa-money"></i> Income
        </li>
        <li onClick={() => handleLinkClick('Promote', 'fa fa-bullhorn')}>
          <i className="fa fa-bullhorn"></i> Promote
        </li>
        <li onClick={() => handleLinkClick('Help', 'fa fa-question-circle')}>
          <i className="fa fa-question-circle"></i> Help
        </li>
      </ul>
      <div className="spacer"></div>
      <div className={`login-link ${isLoginDropdownOpen ? 'active' : ''}`} onClick={toggleLoginDropdown}>
        <i className="fa fa-user"></i> Login
        {isLoginDropdownOpen && (
          <div className="login-dropdown">
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
