import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHome, faTv, faFilm, faFutbol } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Image src='logo.png' className='sidebar-image'/>
        <button className='sidebar-btn'>Subscribe</button>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faUser} />
        <span>&nbsp;&nbsp;Account</span>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faSearch} />
        <span>&nbsp;&nbsp;Search</span>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faHome} />
        <span>&nbsp;&nbsp;Home</span>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faTv} />
        <span>&nbsp;&nbsp;TV</span>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faFilm} />
        <span>&nbsp;&nbsp;Movies</span>
      </div>
      <div className="sidebar-item">
        <FontAwesomeIcon icon={faFutbol} />
        <span>&nbsp;&nbsp;Sports</span>
      </div>
    </div>
  );
};

export default Sidebar;
