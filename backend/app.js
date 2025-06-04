const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const patientsRoute = require('./routes/patients');
const authRoute = require('./routes/auth');
const analyticsRoute = require('./routes/analytics');
const errorHandler = require('./middleware/errorHandler');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/patients', patientsRoute);
app.use('/api/auth', authRoute);
app.use('/api/analytics', analyticsRoute);

app.use(errorHandler);

mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected.'))
  .catch(err => console.error(err));

module.exports = app;
