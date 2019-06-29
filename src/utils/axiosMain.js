// import axios
import axios from 'axios';

// pick token from sessions
const token = sessionStorage.getItem('token');

// create an instance of axios
const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/v2/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default instance;