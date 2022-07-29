import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v2',
  timeout: undefined,
});

export default api;
