import React, {Component} from 'react';
import BuildInfoService from '../services/BuildInfoService';
import moment from 'moment';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    BuildInfoService.getBuildInfo().then(response => {
      this.setState(response.data);
    }).catch(error => {
        console.error(error);
      },
    );
  }

  render() {
    const {timestamp, version} = this.state;
    return (
      <nav className="navbar">
        <span>Copyright &copy; 2020-2021 All Rights Reserved</span>
        <span title={timestamp && moment(timestamp).format('LLL')}>
        {version && `Version: ${version}`}</span>
      </nav>
    );
  }
}

export default Footer;
