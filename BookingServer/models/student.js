const Joi = require('joi');
const mongoose = require('mongoose');

const Student = mongoose.model('Student', new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  lastname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  schoolAddress: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  countryOfresidence: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  residentialAddress: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
    
  },
  regionOfresidence: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    
  },


}));

function validateStudent(student) {
  const schema = {
    firstname: Joi.string().min(5).max(50).required(),
    lastname: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(5).max(1024).required(),
    phone: Joi.string().min(5).max(50).required(),
    schoolAddress: Joi.string().min(5).max(1024).required(),
    countryOfresidence: Joi.string().min(5).max(50).required(),
    residentialAddress: Joi.string().min(5).max(1024).required(),
    regionOfresidence: Joi.string().min(5).max(50).required(),
    
  };

  return Joi.validate(student, schema);
}

exports.Student = Student; 
exports.validate = validateStudent;