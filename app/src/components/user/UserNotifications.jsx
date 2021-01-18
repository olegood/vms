import React, {Component} from 'react';

class UserNotifications extends Component {

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
          <tr>
            <th scope="col">
              <div className="form-check">
                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" />
              </div>
            </th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          </thead>
          <tbody>
          <tr className="text-primary font-weight-bold">
            <th scope="row">
              <div className="form-check">
                <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" />
              </div>
            </th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr className="text-primary font-weight-bold">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr className="text-muted">
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr className="text-muted">
            <th scope="row">4</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr className="text-muted">
            <th scope="row">4</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr className="text-muted">
            <th scope="row">4</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </table>
      </div>
  )
  }
  }

  export default UserNotifications