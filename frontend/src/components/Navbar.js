import React from 'react';

export default function Navbar({ onLogout, role }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Healthcare PMS</a>
        <div className="d-flex">
          <span className="me-3">Role: {role}</span>
          <button className="btn btn-outline-danger" onClick={onLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}
