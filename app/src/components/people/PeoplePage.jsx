import React, {Component} from 'react';
import PeopleService from '../../services/PeopleService';
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
    this.fetchPeople = this.fetchPeople.bind(this);
  }

  componentDidMount() {
    const {page} = this.state.activePage;
    this.fetchPeople(page);
  }

  fetchPeople(page) {
    PeopleService.getPeople({page: page - 1, size: 10}).then(response => {
      const {content, totalPages, size, totalElements} = response.data;
      this.setState({content, totalPages, size, totalElements});
    }).catch(error => console.error(error));
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    this.fetchPeople(pageNumber);
  }

  render() {
    const {content, totalElements} = this.state;
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              People
            </li>
          </ol>
        </nav>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Surname</th>
            <th scope="col">Name</th>
            <th scope="col">Birth</th>
            <th scope="col">Status</th>
          </tr>
          </thead>
          <tbody>
          {
            content.map(person => {
              return (
                <tr key={person.id}>
                  <th scope="row">{person.id}</th>
                  <td>{person.surname}</td>
                  <td>{person.name}</td>
                  <td>{person.birth}</td>
                  <td>{person.status}</td>
                </tr>
              );
            })
          }
          </tbody>
          <tfoot>
          <tr>
            <td>Total Records: {totalElements}</td>
            <td/>
            <td/>
            <td/>
            <td/>
          </tr>
          </tfoot>
        </table>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.size}
          totalItemsCount={this.state.totalElements}
          pageRangeDisplayed={10}
          itemClass='page-item'
          linkClass='btn btn-light'
          onChange={this.handlePageChange}
        />
        Page: {this.state.activePage} of {this.state.totalPages}
      </div>
    );
  }

}

export default PeoplePage;
