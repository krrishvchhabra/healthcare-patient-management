import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/patients';

export const createPatient = (data, token) =>
  axios.post(API_URL, data, { headers: { Authorization: `Bearer ${token}` } });

export const getPatients = (query, token) =>
  axios.get(API_URL, { params: query, headers: { Authorization: `Bearer ${token}` } });

export const updatePatient = (id, data, token) =>
  axios.put(`${API_URL}/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });

export const deletePatient = (id, token) =>
  axios.delete(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
