import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/analytics';

export const getPatientsPerCondition = (token) =>
  axios.get(`${API_URL}/patients-per-condition`, { headers: { Authorization: `Bearer ${token}` } });

export const getMostPrescribed = (token) =>
  axios.get(`${API_URL}/most-prescribed`, { headers: { Authorization: `Bearer ${token}` } });

export const getAvgAgePerDepartment = (token) =>
  axios.get(`${API_URL}/avg-age-per-department`, { headers: { Authorization: `Bearer ${token}` } });

export const getVisitsPerMonth = (token) =>
  axios.get(`${API_URL}/visits-per-month`, { headers: { Authorization: `Bearer ${token}` } });
