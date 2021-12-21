import {
  db
} from '../../plugins/firebase';
import {
  doc,
  getDoc
} from "firebase/firestore";

export default class ProfileService {
  static getProfile(uid) {
    const payload = doc(db, 'users', uid);
    const snapShot = getDoc(payload);

    return snapShot;
  }
}
