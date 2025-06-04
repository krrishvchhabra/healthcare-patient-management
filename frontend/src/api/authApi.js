import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/auth';

export const login = (credentials) =>
  axios.post(`${API_URL}/login`, credentials);

export const register = (data) =>
  axios.post(`${API_URL}/register`, data);
