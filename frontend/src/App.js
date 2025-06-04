import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientForm from './components/PatientForm';
import PatientTable from './components/PatientTable';
import PatientSearch from './components/PatientSearch';
import Login from './components/Login';
import Navbar from './components/Navbar';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { getPatients, deletePatient } from './api/patientApi';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');

  const fetchPatients = async (q) => {
    try {
      const res = await getPatients({ search: q }, token);
      setPatients(res.data.data);
    } catch {}
  };

  const handleLogin = (token, role) => {
    setToken(token);
    setRole(role);
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  };

  const handleLogout = () => {
    setToken('');
    setRole('');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  const handleSearch = (query) => {
    setSearch(query);
    fetchPatients(query);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this patient?')) {
      await deletePatient(id, token);
      fetchPatients(search);
    }
  };

  return (
    <Router>
      {token && <Navbar onLogout={handleLogout} role={role} />}
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={
          <ProtectedRoute token={token}>
            <div className="container">
              <PatientSearch onSearch={handleSearch} />
              <PatientForm token={token} onSuccess={() => fetchPatients(search)} />
              <PatientTable patients={patients} onDelete={handleDelete} onEdit={() => {}} />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/analytics" element={
          <ProtectedRoute token={token}>
            <AnalyticsDashboard token={token} />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
