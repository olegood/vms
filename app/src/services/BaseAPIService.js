import axios from 'axios';

const baseUrl = 'http://localhost:8082';

/**
 * Back end API calls wrapper.
 *
 * All services call for back end resources should extend it.
 */
class BaseAPIService {

  get(url, params) {
    return axios.get(`${baseUrl}${url}`, {params: params});
  }

  post(url, data) {
    return axios.post(`${baseUrl}${url}`, data);
  }

}

export default BaseAPIService;
