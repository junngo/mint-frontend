import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
  // You can add more default settings here
});

export default api;
