// import axios
import axios from 'axios';

// pick token from sessions
const token = sessionStorage.getItem('Token');

// create an instance of axios
const instance = axios.create({
  baseURL: 'https://dbireporter.herokuapp.com/api/v2/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default instance;