import axios from 'axios';

const api = axios.create({
  baseURL:'http://192.168.0.10:3333' //'https://tas-deploy.herokuapp.com/'
})

export default api;