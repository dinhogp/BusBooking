const {Bus, validate} = require('../models/bus'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/', async (req, res) => {
  const bus = await Bus.find().sort('dateOfdeparture');
  res.send(bus);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  let bus = new Bus(_.pick(req.body, ['busname','departure', 'destination', 'dateOfdeparture','timeOfdeparture','busLimit','busPrice','numberBooked']));
  bus = await bus.save();
  
  res.send(bus);
});
//update
router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const bus = await Bus.findByIdAndUpdate(req.params.id,{ 
      busname: req.body.busname,
      departure: req.body.departure,
      destination: req.body.destination,
      dateOfdeparture: req.body.dateOfdeparture,
      timeOfdeparture: req.body.timeOfdeparture,
      busPrice: req.body.busPrice,
      busLimit: req.body.busLimit,
      numberBooked: req.body.numberBooked,

    }, { new: true });

  if (!bus) return res.status(404).send('The bus with the given ID was not found.');
  
  res.send(bus);
});
//uPDATE BUS LIMIT
router.put('/updateLimit/:id', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const bus = await Bus.findByIdAndUpdate(req.params.id,
      { 
        busLimit: req.body.busLimit,

      }, { new: true });
  
    if (!bus) return res.status(404).send('The bus with the given ID was not found.');
    
    res.send(bus);
});


router.delete('/:id', async (req, res) => {
  const bus= await Bus.findByIdAndRemove(req.params.id);

  if (!bus) return res.status(404).send('The bus with the given ID was not found.');

  res.send(bus);
});

router.get('/:id', async (req, res) => {
  const bus = await Bus.findById(req.params.id);

  if (!bus) return res.status(404).send('The bus with the given ID was not found.');

  res.send(bus);
});

module.exports = router; 