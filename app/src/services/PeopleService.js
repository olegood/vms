import BaseAPIService from './BaseAPIService';

class PersonService extends BaseAPIService {

  getPeople(params) {
    return super.get('/person', params);
  }

}

export default new PersonService();
