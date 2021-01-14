import React, {Component} from 'react';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/welcome">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/people">People</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings">Settings</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
