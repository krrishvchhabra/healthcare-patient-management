const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const auth = require('../middleware/auth');

router.get('/patients-per-condition', auth, analyticsController.patientsPerCondition);
router.get('/most-prescribed', auth, analyticsController.mostPrescribedMedications);
router.get('/avg-age-per-department', auth, analyticsController.avgAgePerDepartment);
router.get('/visits-per-month', auth, analyticsController.visitsPerMonth);

module.exports = router;
