const {Bookee, validate} = require('../models/bookee'); 
const {Bus} = require('../models/bus'); 
const {Student} = require('../models/student'); 
const mongoose = require('mongoose');
const Fawn = require('fawn');
const express = require('express');
const router = express.Router();
const _ = require('lodash');

Fawn.init(mongoose);

router.get('/', async (req, res) => {
  const bookees = await Bookee.find().sort('dateBooked');
  res.send(bookees);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const student = await Student.findById(req.body.studentId);
  if (!student) return res.status(400).send('Invalid student.');

  const bus= await Bus.findById(req.body.busId);
  if (!bus) return res.status(400).send('Invalid bus.');

  if (bus.busLimit === bus.numberBooked) return res.status(400).send('Bus is FULL.');

  let bookee = new Bookee({ 
    student: {
      _id: student._id,
      firstname: student.firstname,
      lastname: student.lastname, 
      phone: student.phone,
      email: student.email,
      regionOfresidence: student.regionOfresidence
    },
    bus: {
      _id: bus._id,
      busname: bus.busname,
      departure: bus.departure,
      destination: bus.destination,
      busLimit: bus.busLimit,
      numberBooked: bus.numberBooked
    },
    hasPaid:req.body.hasPaid,
  });

  try {
    new Fawn.Task()
      .save('bookees', bookee)
      .update('buses', { _id: bus._id }, { 
        $inc: { numberBooked: +1 }
      })
      .run();
  
    res.send(bookee);
  }
  catch(ex) {
    res.status(500).send('Something failed.');
  }
});

router.get('/:busId', async (req, res) => {
  //const bookee = await Bookee.findById(req.params.id);
  //
  const bookee = await Bookee.find({"bus._id":req.params.busId});
  if (!bookee) return res.status(404).send('The bookee with the given ID was not found.');

  res.send(bookee);
});

module.exports = router; 

