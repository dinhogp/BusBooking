const express = require('express');
const users = require('../routes/users');
const students = require('../routes/students');
const buses = require('../routes/buses');
const bookees = require('../routes/bookees');
const auth = require('../routes/auth');
const error = require('../middleware/error');


module.exports = function(app) {
  app.use(express.json());
  app.use('/api/students', students);
  app.use('/api/buses', buses);
  app.use('/api/bookees', bookees);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use(error);
}
