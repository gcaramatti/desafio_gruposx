import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
    'X-Header-FrontLocalOrigin': `http://${window.location.host}`
  }
});

export default api;
