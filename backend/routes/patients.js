const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const { validatePatient } = require('../utils/validators');
const auth = require('../middleware/auth');

router.post('/', auth, validatePatient, patientController.createPatient);
router.get('/', auth, patientController.searchPatients);
router.put('/:id', auth, validatePatient, patientController.updatePatient);
router.delete('/:id', auth, patientController.deletePatient);

module.exports = router;
