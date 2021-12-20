import axios from 'axios';
import store from '@/store';

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const errorMessage = error.response.data.error;
    console.dir(error);
    store.dispatch('setError', errorMessage);

    return Promise.reject(error);
  }
);

export default axios;

