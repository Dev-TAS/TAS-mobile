import axios from 'axios';

const api = axios.create({
  baseURL:'https://tas-deploy.herokuapp.com/' //'http://192.168.0.10:3333'
})

export default api;