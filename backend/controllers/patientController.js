const Patient = require('../models/Patient');
const logger = require('../utils/logger');

// Insert New Patient Record
exports.createPatient = async (req, res, next) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    next(err);
  }
};

// Search Patient Record
exports.searchPatients = async (req, res, next) => {
  try {
    const { search, page = 1, limit = 10, sort = 'name' } = req.query;
    const query = search
      ? {
          $or: [
            { patientId: { $regex: search, $options: 'i' } },
            { name: { $regex: search, $options: 'i' } },
            { 'visits.diagnosis': { $regex: search, $options: 'i' } },
          ],
        }
      : {};
    const patients = await Patient.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort(sort)
      .exec();
    const count = await Patient.countDocuments(query);
    res.json({ data: patients, total: count });
  } catch (err) {
    next(err);
  }
};

// Update Patient Record
exports.updatePatient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findOneAndUpdate(
      { patientId: id },
      { $set: req.body },
      { new: true }
    );
    if (!patient) return res.status(404).json({ message: 'Patient not found.' });
    res.json(patient);
  } catch (err) {
    next(err);
  }
};

// Delete Patient Record
exports.deletePatient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findOneAndDelete({ patientId: id });
    if (!patient) return res.status(404).json({ message: 'Patient not found.' });
    logger.logDelete(patient);
    res.json({ message: 'Patient deleted successfully.' });
  } catch (err) {
    next(err);
  }
};
