// src/repositories/weatherRepository.js

const Weather = require('../model/weatherModel');

const createWeatherData = async (weatherData) => {
    try {
        const newWeather = new Weather(weatherData);
        await newWeather.save();
        console.log("saved")
        return newWeather;
    } catch (err) {
        console.error(err.message);
        throw new Error('Failed to save weather data');
    }
};

const getWeatherByFilter = async (location, startDate, endDate) => {
    try {
      console.log(location, startDate, endDate, "location, startDate, endDate");
  
      const from = new Date(startDate);
      const to = new Date(endDate);
  
      const data = await Weather.find({
        location,
        date: { $gte: from, $lte: to }
      }).sort({ date: 1 });
  
      return data;
    } catch (err) {
      console.error(err.message);
      throw new Error('Failed to retrieve weather data');
    }
  };
  
const fetchStoredDataFromModel = async () => {
    try {

        const data = await Weather.find().lean()
        return data

    }
    catch (err) {
        console.error(err);


    }

}

module.exports = {
    createWeatherData,
    getWeatherByFilter,
    fetchStoredDataFromModel
};
