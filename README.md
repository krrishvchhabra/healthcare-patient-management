# Healthcare Patient Management System Using MongoDB

## Description

A full-stack application for healthcare providers to manage patient data using MongoDB as the core database. Features include adding, searching, updating, deleting patient records, and advanced analytics using MongoDB Aggregation.

## Features
- Add, search, update, and delete patient records
- Advanced search with filters, pagination, and sorting
- Analytics dashboard (patients per condition, most prescribed meds, etc.)
- Authentication & role-based access (optional)
- Data validation & error handling

## Technology Stack
- Frontend: React.js, Bootstrap, Chart.js
- Backend: Node.js, Express
- Database: MongoDB (Mongoose)
- Authentication: JWT

## Getting Started

### Backend
1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env` and set your variables
4. `npm start`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm start`

### API Endpoints

| Method | Route                        | Description                   |
|--------|-----------------------------|-------------------------------|
| POST   | /api/auth/login             | User login                    |
| POST   | /api/auth/register          | Register user                 |
| POST   | /api/patients/              | Add new patient               |
| GET    | /api/patients/              | Search patients               |
| PUT    | /api/patients/:id           | Update patient                |
| DELETE | /api/patients/:id           | Delete patient                |
| GET    | /api/analytics/patients-per-condition | Patients per condition  |
| GET    | /api/analytics/most-prescribed      | Most prescribed meds   |
| GET    | /api/analytics/avg-age-per-department | Avg age per department |
| GET    | /api/analytics/visits-per-month     | Visits per month        |
