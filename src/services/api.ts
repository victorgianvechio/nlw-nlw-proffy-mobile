import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.254.9.136:3333',
  baseURL: 'http://200.10.239.4:3333' 
});

export default axios;