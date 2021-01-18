import React, {Component} from 'react';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class UserProfile extends Component {

  render() {
    const {name, surname, username, email} = {
      name: "Oleg",
      surname: "Anastassov",
      username: "admin",
      email: "admin@vms.com"
    };
    const roles = ['System Administrator', 'Full Access Manager', 'Database Maintainer'];
    return (
      <div className="container">

        <div className="row">
          <div className="col-sm-7">
            <div className="card">
              <div className="card-body">

                <h3 className="font-weight-bold">{name.concat(" ", surname)}</h3>
                <h5 className="text-secondary">{username}</h5>

                <FontAwesomeIcon icon={faEnvelope}/> {email}

              </div>
            </div>
          </div>

          <div className="col col-sm-5">
            <div className="card">
              <div className="card-header">
                User Roles
              </div>
              <div className="card-body">

                {/*<h3>User Roles</h3>*/}
                <ul className="list-group list-group-flush">
                  {
                    roles.map(role => {
                      return <li className="list-group-item">{role}</li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default UserProfile