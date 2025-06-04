import React, { useState } from 'react';

export default function PatientSearch({ onSearch }) {
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex mb-2">
      <input className="form-control me-2" placeholder="Search by ID, name, diagnosis..." value={query} onChange={e => setQuery(e.target.value)} />
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
  );
}
