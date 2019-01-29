const Joi = require('joi');
const mongoose = require('mongoose');

const Bookee = mongoose.model('Bookee', new mongoose.Schema({
  student: { 
    type: new mongoose.Schema({
        firstname: {
            type: String,
            minlength: 5,
            required: true,
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
            required:true,
            minlength: 5,
            maxlength: 255,
        },
        phone: {
            type: String,
            required:true,
            minlength: 5,
            maxlength: 50
        },
        regionOfresidence: {
            type: String,
            required:true,
            minlength: 5,
            maxlength: 50,
            
        }
    }),
    required:true
  },
    
  bus: {
    type: new mongoose.Schema({
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
      numberBooked:{
        type:Number,
        default:0
       },
       busLimit: {
        type: Number,
        required: true,
    
      },  
    }),
    required: true
  },
  hasPaid: { 
    type: Boolean, 
    default: false 
  },
  dateBooked:{
      type:Date,
      default:Date.now
  }
}));

function validateBookee(bookee) {
  const schema = {
    busId: Joi.objectId().required(),
    studentId: Joi.objectId().required(),
    hasPaid: Joi.boolean(),
    dateBooked: Joi.date()
  };

  return Joi.validate(bookee, schema);
}

exports.Bookee = Bookee; 
exports.validate = validateBookee;