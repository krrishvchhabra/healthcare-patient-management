import React from 'react';

export default function PatientTable({ patients, onEdit, onDelete }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Contact</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((p) => (
          <tr key={p.patientId}>
            <td>{p.patientId}</td>
            <td>{p.name}</td>
            <td>{p.age}</td>
            <td>{p.gender}</td>
            <td>{p.contactInfo?.phone}</td>
            <td>
              <button className="btn btn-sm btn-info" onClick={() => onEdit(p)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(p.patientId)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
