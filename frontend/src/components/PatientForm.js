import React, { useState } from 'react';
import { createPatient } from '../api/patientApi';

export default function PatientForm({ token, onSuccess }) {
  const [form, setForm] = useState({
    patientId: '',
    name: '',
    age: '',
    gender: '',
    contactInfo: { phone: '', email: '', address: '' },
    allergies: [],
    medicalHistory: [],
    currentPrescriptions: [],
    doctorNotes: [],
    visits: [],
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createPatient(form, token);
      onSuccess();
      setForm({ ...form, name: '', patientId: '', age: '', gender: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Error adding patient');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Patient</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <input name="patientId" placeholder="Patient ID" value={form.patientId} onChange={handleChange} required />
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="age" placeholder="Age" type="number" value={form.age} onChange={handleChange} required />
      <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} required />
      <input name="contactInfo.phone" placeholder="Phone" value={form.contactInfo.phone} onChange={e => setForm({ ...form, contactInfo: { ...form.contactInfo, phone: e.target.value } })} />
      <input name="contactInfo.email" placeholder="Email" value={form.contactInfo.email} onChange={e => setForm({ ...form, contactInfo: { ...form.contactInfo, email: e.target.value } })} />
      <input name="contactInfo.address" placeholder="Address" value={form.contactInfo.address} onChange={e => setForm({ ...form, contactInfo: { ...form.contactInfo, address: e.target.value } })} />
      <button type="submit" className="btn btn-primary">Add Patient</button>
    </form>
  );
}
