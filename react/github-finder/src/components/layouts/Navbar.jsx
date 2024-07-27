import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon = 'fab fa-github', title = 'Github Finder' }) => {
  return (
    <div className="navbar container">
      <h1>
        <Link to="/">
          <i className={icon}></i> {title}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
