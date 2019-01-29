const Joi = require('joi');
const mongoose = require('mongoose');

const Bus = mongoose.model('Bus', new mongoose.Schema({
  busname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  departure: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  destination: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    
  },
  dateOfdeparture: {
    type: Date,
    //required: true,
    default: Date.now
  },
  timeOfdeparture: {
    type: String,
    required: true,
    minlength:5,
    maxlength:5
  },
  busLimit: {
    type: Number,
    required: true,

  },
  busPrice: {
      type:Number,
      required:true
  },
  numberBooked:{
      type:Number,
      default:0
  }


}));

function validateBus(bus) {
  const schema = {
    busname: Joi.string().min(5).max(50).required(),
    departure: Joi.string().min(5).max(50).required(),
    destination: Joi.string().min(5).max(50).required(),
    dateOfdeparture: Joi.date(),
    timeOfdeparture: Joi.string().min(5).max(5).required(),
    busLimit: Joi.number().required(),
    busPrice: Joi.number().required(),
    numberBooked: Joi.number(),
  };

  return Joi.validate(bus, schema);
}

exports.Bus = Bus; 
exports.validate = validateBus;