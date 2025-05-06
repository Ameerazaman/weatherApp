

const express = require('express');
const { getWeather, fetchStoredData, getFilterWeather,  } = require('../Controller/weatherController');

const router = express.Router();

// Route to fetch and store weather data
router.get('/fetch-weather', fetchStoredData);

// Route to get historical weather data based on date range
router.get('/weather', getWeather);

router.get('/filter-weather',getFilterWeather)

module.exports = router;
