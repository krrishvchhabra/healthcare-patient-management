const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  medication: String,
  dosage: String,
  frequency: String,
  prescribedBy: String,
  startDate: Date,
  endDate: Date,
});

const doctorNoteSchema = new mongoose.Schema({
  note: String,
  doctor: String,
  date: { type: Date, default: Date.now },
});

const visitSchema = new mongoose.Schema({
  visitDate: { type: Date, default: Date.now },
  department: String,
  reason: String,
  diagnosis: String,
  labReports: [{ type: String }], // URLs or filenames
});

const patientSchema = new mongoose.Schema({
  patientId: { type: String, unique: true, required: true, index: true },
  name: { type: String, required: true, text: true },
  age: Number,
  gender: String,
  contactInfo: {
    phone: { type: String, match: /^[0-9]{10}$/ },
    email: { type: String, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
    address: String,
  },
  allergies: [String],
  medicalHistory: [String],
  currentPrescriptions: [prescriptionSchema],
  doctorNotes: [doctorNoteSchema],
  visits: [visitSchema],
}, { timestamps: true });

patientSchema.index({ name: 'text', 'visits.diagnosis': 'text' });

module.exports = mongoose.model('Patient', patientSchema);
