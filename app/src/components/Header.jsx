import React, {Component} from 'react';
import {
  faBell,
  faBullseye,
  faChartPie,
  faInbox,
  faLayerGroup,
  faPencilAlt,
  faTh,
  faUser,
  faUsers,
  faWrench
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends Component {

  render() {
    // for demonstration purposes
    const {hasNotifications, hasInboxItems} = {
      hasNotifications: Math.random() < 0.5,
      hasInboxItems: Math.random() < 0.5
    };
    return (
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse1" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            {/*Dashboard*/}
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                <FontAwesomeIcon icon={faTh}/>
              </a>
            </li>

            {/*Registration*/}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="registrationDropdown" role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faUsers}/> Registration
              </a>
              <div className="dropdown-menu" aria-labelledby="registrationDropdown">
                <a className="dropdown-item disabled" href="/registration/enroll">Enroll...</a>
                <a className="dropdown-item" href="/people">People...</a>
                <a className="dropdown-item disabled" href="#">Documents...</a>
                <div className="dropdown-divider"/>
                <a className="dropdown-item disabled" href="#">Processing...</a>
              </div>
            </li>

            {/*Vouchers*/}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="vouchersDropdown" role="button"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faLayerGroup}/> Vouchers
              </a>
              <div className="dropdown-menu" aria-labelledby="vouchersDropdown">
                <a className="dropdown-item disabled" href="#">Recent...</a>
                <a className="dropdown-item disabled" href="#">Upload file...</a>
              </div>
            </li>

            {/*Processing*/}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="processingDropdown" role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faBullseye}/> Processing
              </a>
              <div className="dropdown-menu" aria-labelledby="processingDropdown">
                <a className="dropdown-item disabled" href="#">Registrations...</a>
                <a className="dropdown-item disabled" href="#">Petitions...</a>
                <div className="dropdown-divider"/>
                <a className="dropdown-item disabled" href="#">Voucher match</a>
              </div>
            </li>

            {/*Reports*/}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="reportsDropdown" role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faChartPie}/> Reports
              </a>
              <div className="dropdown-menu" aria-labelledby="reportsDropdown">
                <a className="dropdown-item disabled" href="#">Vouchers utilization</a>
              </div>
            </li>

            {/*Archive*/}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="archiveDropdown" role="button"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faPencilAlt}/> Audit
              </a>
              <div className="dropdown-menu" aria-labelledby="archiveDropdown">
                <a className="dropdown-item disabled" href="#">Vouchers utilization</a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="adminDropdown" role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faWrench}/> Administration
              </a>
              <div className="dropdown-menu" aria-labelledby="adminDropdown">
                <a className="dropdown-item disabled" href="#">Health</a>
                <div className="dropdown-divider"/>
                <a className="dropdown-item disabled" href="#">Users</a>
                <a className="dropdown-item disabled" href="#">Security</a>
                <div className="dropdown-divider"/>
                <a className="dropdown-item disabled" href="#">Document Type</a>
                <a className="dropdown-item disabled" href="#">Disability Status</a>
                <div className="dropdown-divider"/>
                <a className="dropdown-item disabled" href="#">Global setup</a>
              </div>
            </li>

          </ul>
        </div>

        <div className="navbar-collapse collapse w-100 order-2 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            {hasInboxItems && <li className="nav-item">
              <a className="nav-link" href="/user/inbox">
                  <span className="badge badge-pill badge-warning" title="Unprocessed items">
                    8
                  </span>
              </a>
            </li>}
            {!hasInboxItems && <li className="nav-item">
              <a className="nav-link" href="/user/inbox">
                <FontAwesomeIcon icon={faInbox}/>
              </a>
            </li>}
            {hasNotifications && <li className="nav-item">
              <a className="nav-link" href="/user/notifications">
                  <span className="badge badge-pill badge-primary" title="Unread notifications">
                    35
                  </span>
              </a>
            </li>}
            {!hasNotifications && <li className="nav-item">
              <a className="nav-link" href="/user/notifications">
                <FontAwesomeIcon icon={faBell}/>
              </a>
            </li>}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faUser}/>
              </a>
              <div className="dropdown-menu" aria-labelledby="referenceDropdown">
                <a className="dropdown-item disabled" href="#">Signed in as <strong>admin</strong></a>
                <div className="dropdown-divider"/>
                <a className="dropdown-item" href="/user/profile">Profile</a>
                <div className="dropdown-divider"/>
                <a className="dropdown-item disabled" href="/user/settings">Settings</a>
                <a className="dropdown-item disabled" href="#">Sing out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
