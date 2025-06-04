import React, { useState } from 'react';
import { login } from '../api/authApi';

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await login(form);
      onLogin(res.data.token, res.data.role);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required />
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
}
