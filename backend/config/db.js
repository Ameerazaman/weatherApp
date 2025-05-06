// config/db.js
const mongoose = require('mongoose');
const { config } = require('dotenv');
config();  // Ensure this loads your .env variables

const MONGO_URI = process.env.MONGO_URI || '';  // Default to empty string if undefined

const connectDB = () => {
  try {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('MongoDB connected'))
      .catch((err) => console.error('MongoDB connection error:', err));
  } catch (error) {
    console.log(error);
    console.log('Error from db.js');
  }
};

module.exports = connectDB;

