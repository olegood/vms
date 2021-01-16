import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faHome, faUserFriends} from '@fortawesome/free-solid-svg-icons';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/welcome">
                <FontAwesomeIcon icon={faHome}/> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/people">
                <FontAwesomeIcon icon={faUserFriends}/> People
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings">
                <FontAwesomeIcon icon={faCog}/> Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
