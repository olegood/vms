import BaseAPIService from './BaseAPIService';

class PersonService extends BaseAPIService {

  getPeople(params) {
    return super.get('/api/people', params);
  }

}

export default new PersonService();
