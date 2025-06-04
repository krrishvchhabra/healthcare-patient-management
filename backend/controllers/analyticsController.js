const Patient = require('../models/Patient');

// Number of patients per condition
exports.patientsPerCondition = async (req, res, next) => {
  try {
    const result = await Patient.aggregate([
      { $unwind: "$visits" },
      { $group: { _id: "$visits.diagnosis", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

// Most prescribed medications
exports.mostPrescribedMedications = async (req, res, next) => {
  try {
    const result = await Patient.aggregate([
      { $unwind: "$currentPrescriptions" },
      { $group: { _id: "$currentPrescriptions.medication", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

// Average patient age per department
exports.avgAgePerDepartment = async (req, res, next) => {
  try {
    const result = await Patient.aggregate([
      { $unwind: "$visits" },
      { $group: { _id: "$visits.department", avgAge: { $avg: "$age" } } },
      { $sort: { avgAge: -1 } },
    ]);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

// Frequency of visits per month
exports.visitsPerMonth = async (req, res, next) => {
  try {
    const result = await Patient.aggregate([
      { $unwind: "$visits" },
      { $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$visits.visitDate" } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } },
    ]);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
