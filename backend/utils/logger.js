const fs = require('fs');
const path = require('path');

exports.logDelete = (patient) => {
  const logPath = path.join(__dirname, '../logs/deletions.log');
  const entry = `${new Date().toISOString()} | Deleted patient: ${patient.patientId} | ${patient.name}\n`;
  fs.appendFileSync(logPath, entry);
};
