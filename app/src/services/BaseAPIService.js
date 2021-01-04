import axios from 'axios'

/**
 * Back end API calls wrapper.
 *
 * All services call for back end resources should extend it.
 */
class BaseAPIService {

    get(url) {
        const baseUrl = 'http://localhost:8082'
        return axios.get(`${baseUrl}${url}`)
    }

}

export default BaseAPIService