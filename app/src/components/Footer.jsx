import React, {Component} from 'react'
import BuildInfoService from "../services/BuildInfoService"
import moment from "moment"

class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            version: '<undefined>'
        }
    }

    componentDidMount() {
        BuildInfoService.getBuildInfo()
            .then(response => {
                this.setState(response.data)
            }).catch(error => {
                console.error(error)
            }
        )
    }

    render() {
        const {timestamp, version} = this.state
        return (
            <div>
                <span title={timestamp && moment(timestamp).format("LLL")}>
                Version: {version}
                </span>
            </div>
        )
    }
}

export default Footer