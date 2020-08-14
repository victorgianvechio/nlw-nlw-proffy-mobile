import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.254.9.136:3333' // IP INTERNO UNIVEM
  // baseURL: 'http://200.10.239.4:3333' // IP EXTERNO UNIVEM
  //baseURL: 'http://201.62.67.232:3333' // IP EXTERNO CASA
  // baseURL: 'http://192.168.86.2:3333' // IP INTERNO CASA
  baseURL: 'http://127.0.0.1:3333'
});

export default axios;