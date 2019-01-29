const {Student, validate} = require('../models/student'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/', async (req, res) => {
  const student = await Student.find().sort('lastname');
  res.send(student);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  let student = new Student(_.pick(req.body, ['firstname','lastname', 'email', 'password','phone','schoolAddress','countryOfresidence','residentialAddress','regionOfresidence']));
  student = await student.save();
  
  res.send(student);
});
//update
router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const student = await Student.findByIdAndUpdate(req.params.id,
    { 
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      schoolAddress: req.body.schoolAddress,
      countryOfresidence: req.body.countryOfresidence,
      residentialAddress: req.body.residentialAddress,
      phone: req.body.phone,
      regionOfresidence: req.body.regionOfresidence,


    }, { new: true });

  if (!student) return res.status(404).send('The student with the given ID was not found.');
  
  res.send(student);
});




router.delete('/:id', async (req, res) => {
  const student= await Student.findByIdAndRemove(req.params.id);

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  res.send(student);
});

router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  res.send(student);
});

module.exports = router; 