import React, {Component} from 'react';
import PeopleService from '../../services/PeopleService';
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Pagination from 'react-js-pagination';

class PeoplePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: [],
      activePage: 1,
      totalPages: null,
      size: null,
      totalElements: null,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.fetchPeople = this.fetchPeople.bind(this);
  }

  componentDidMount() {
    const {page} = this.state.activePage;
    this.fetchPeople(page);
  }

  fetchPeople(page) {
    let params = {page: page - 1, size: 7};

    const value = document.getElementById("inputSurname").value;
    if (value !== "") {
      params = {surname: value, ...params}
    }

    PeopleService.getPeople(params).then(response => {
      const {content, totalPages, size, totalElements} = response.data;
      this.setState({content, totalPages, size, totalElements});
    }).catch(error => console.error(error));
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this.fetchPeople(pageNumber);
  }

  handleSearchChange() {
    const value = document.getElementById("inputSurname").value;
    const {page} = this.state.activePage;
    if (value !== "") {
      this.fetchPeople(value, page)
      return
    }
    this.fetchPeople(``, page)
  }

  render() {
    const {content, totalElements} = this.state;
    const noResultsFound = Array.isArray(content) && content.length > 0;
    return (
      <div>
        <div className="row">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon2">
                <FontAwesomeIcon icon={faSearch}/>
              </span>
            </div>
            <input type="text" id="inputSurname" className="form-control" placeholder="Start typing for search"
                   aria-label="Quick search" aria-describedby="basic-addon2" onChange={this.handleSearchChange}/>
          </div>
        </div>
        <div className="row">
          <table className="table">
            <thead className="thead-light">
            <tr>
              {
                ['Surname', 'Name', 'Birth', 'Status', ''].map(title => {
                  return <th scope="col">{title}</th>;
                })
              }
            </tr>
            </thead>
            <tbody>
            {
              content.map(person => {
                const {id, surname, name, birth, status} = person
                return (
                  <tr key={id}>
                    <td className="align-middle">{surname}</td>
                    <td className="align-middle">{name}</td>
                    <td className="align-middle">{birth}</td>
                    <td className="align-middle">{status}</td>
                    <td>
                      <div className="btn-group dropright">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <FontAwesomeIcon icon={faUser}/>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <h6 className="dropdown-header">Registration</h6>
                          <a className="dropdown-item" href="#">Personal Info</a>
                          <a className="dropdown-item" href="#">Documents</a>
                          <h6 className="dropdown-header">Petitions</h6>
                          <a className="dropdown-item" href="#">New...</a>
                          <a className="dropdown-item" href="#">All Petitions</a>
                          <h6 className="dropdown-header">Vouchers</h6>
                          <a className="dropdown-item" href="#">Check Status</a>
                          <div className="dropdown-divider"/>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })
            }
            </tbody>
            <tfoot>
            <tr>
              <td className="align-middle" colSpan="5">Items found: {totalElements}</td>
            </tr>
            </tfoot>
          </table>
        </div>

        <div className="row justify-content-center">
          {noResultsFound && <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.size}
            totalItemsCount={this.state.totalElements}
            pageRangeDisplayed={10}
            itemClass='page-item'
            linkClass='btn btn-light'
            onChange={this.handlePageChange}
          />
          }
        </div>

        {noResultsFound && <div className="text-center">
          Page: {this.state.activePage} of {this.state.totalPages}
        </div>
        }

      </div>
    );
  }

}

export default PeoplePage;
