// src/models/weatherModel.js

const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  location: {
    type: String,
  
  },
  date: {
    type: Date,
 
  },
  temperature: {
    type: Number,

  },
  weather: {
    type: String,

  },
  icon: {
    type: String,

  },
});

module.exports = mongoose.model('Weather', WeatherSchema);
