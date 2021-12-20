import axios from 'axios';

export default class AuthService {
  static signIn(params) {
    return axios.get('https://www.google.com');
  }
}

