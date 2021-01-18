import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons";

class Dashboard extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-sm-4 align-items-stretch">
            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon={faUsers}/> Featured
              </div>
              <div className="card-body">
                <h4>First</h4>
              </div>
              <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>

          <div className="col col-sm-4">
            <div className="card">
              <div className="card-header">
                <FontAwesomeIcon icon={faUsers}/> Featured
              </div>
              <div className="card-body">

                <h5 className="card-title">Welcome,</h5>

                <p className="card-text">
                  You can start you work by pressing login button.
                </p>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <span className="badge badge-primary badge-pill">14</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                    <span className="badge badge-primary badge-pill">2</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                    <span className="badge badge-primary badge-pill">1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col col-sm-4">
            <div className="card">
              <div className="card-body">
                <h4>Third</h4>
              </div>
            </div>
          </div>


        </div>

        <div className="row mt-4">

          <div className="col col-sm-4">
            <div className="card">
              <div className="card-body">
                <h4>First</h4>
              </div>
            </div>
          </div>

          <div className="col col-sm-4">
            <div className="card">
              <div className="card-body">
                <h4>Second</h4>
              </div>
            </div>
          </div>

          <div className="col col-sm-4">
            <div className="card">
              <div className="card-body">
                <h4>Third</h4>
              </div>
            </div>
          </div>


        </div>

      </div>
    )
  }
}

export default Dashboard