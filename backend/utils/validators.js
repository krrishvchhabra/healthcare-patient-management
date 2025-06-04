exports.validatePatient = (req, res, next) => {
  const { patientId, name, age, gender, contactInfo } = req.body;
  if (!patientId || !name || typeof age !== 'number' || !gender)
    return res.status(400).json({ message: 'Missing required fields.' });
  next();
};
