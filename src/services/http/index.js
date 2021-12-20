import AuthService from "./Auth";

export class HttpService {
  constructor() {
    this.auth = AuthService;

    this = window.$httpService;
  }
}

export default HttpService;
