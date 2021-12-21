import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

export default class AuthService {
  static signIn(params) {
    const auth = getAuth();
    const email = params.email;
    const password = params.password;

    return signInWithEmailAndPassword(auth, email, password);
  }
}

