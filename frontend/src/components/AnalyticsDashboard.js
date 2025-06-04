import React, { useEffect, useState } from 'react';
import { getPatientsPerCondition, getMostPrescribed, getAvgAgePerDepartment, getVisitsPerMonth } from '../api/analyticsApi';
import { Bar, Pie, Line } from 'react-chartjs-2';

export default function AnalyticsDashboard({ token }) {
  const [perCondition, setPerCondition] = useState([]);
  const [mostPrescribed, setMostPrescribed] = useState([]);
  const [avgAgeDept, setAvgAgeDept] = useState([]);
  const [visitsMonth, setVisitsMonth] = useState([]);

  useEffect(() => {
    getPatientsPerCondition(token).then(res => setPerCondition(res.data));
    getMostPrescribed(token).then(res => setMostPrescribed(res.data));
    getAvgAgePerDepartment(token).then(res => setAvgAgeDept(res.data));
    getVisitsPerMonth(token).then(res => setVisitsMonth(res.data));
  }, [token]);

  return (
    <div>
      <h3>Analytics Dashboard</h3>
      <div style={{ maxWidth: 600, margin: 'auto' }}>
        <h5>Patients Per Condition</h5>
        <Bar data={{
          labels: perCondition.map(r => r._id),
          datasets: [{ label: 'Patients', data: perCondition.map(r => r.count), backgroundColor: 'rgba(54,162,235,0.6)' }]
        }} />
        <h5 className="mt-4">Most Prescribed Medications</h5>
        <Pie data={{
          labels: mostPrescribed.map(r => r._id),
          datasets: [{ data: mostPrescribed.map(r => r.count), backgroundColor: ['#ff6384','#36a2eb','#ffce56'] }]
        }} />
        <h5 className="mt-4">Average Age Per Department</h5>
        <Bar data={{
          labels: avgAgeDept.map(r => r._id),
          datasets: [{ label: 'Average Age', data: avgAgeDept.map(r => r.avgAge), backgroundColor: 'rgba(153,102,255,0.6)' }]
        }} />
        <h5 className="mt-4">Visits Per Month</h5>
        <Line data={{
          labels: visitsMonth.map(r => r._id),
          datasets: [{ label: 'Visits', data: visitsMonth.map(r => r.count), fill: false, borderColor: '#36a2eb' }]
        }} />
      </div>
    </div>
  );
}
