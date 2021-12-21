import AuthService from "./Auth";
import ProfileService from "./Profile";

export class HttpService {
  constructor() {
    window.$httpService = this;

    this.auth = AuthService;
    this.profile = ProfileService;
  }
}

export default HttpService;
