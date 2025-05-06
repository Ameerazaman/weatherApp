// src/services/weatherService.js

const axios = require('axios');
const { createWeatherData, getWeatherDataByLocation, fetchStoredDataFromModel, getWeatherByFilter } = require('../Repository/weatherRepository');
require('dotenv').config();

const apiKey = process.env.WEATHER_API_KEY;


const fetchWeatherData = async (location) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=metric`
        );

        const data = response.data;
        const weatherEntry = {
            location: data.name,
            date: new Date(),
            temperature: data.main.temp,
            weather: data.weather[0].description, // 🔁 Changed from description to weather
            icon: data.weather[0].icon,
        };

        console.log(weatherEntry, "Filtered Weather Data");

        // Save to DB
        await createWeatherData(weatherEntry);

        return weatherEntry;
    } catch (err) {
        console.error("Error fetching weather data:", err.message);
        throw new Error("Failed to fetch weather data");
    }
};


const filterWeather = async (location, startDate, endDate) => {
    try {
        const data = await getWeatherByFilter(location, startDate, endDate);
        return data;
    } catch (err) {
        console.error(err.message);
        throw new Error('Error fetching weather data from DB');
    }
};

const fetchStoredWeatherData = async () => {
    try {
     const data=await fetchStoredDataFromModel()
     return data
    }
    catch (err) {
        console.error(err);
       
        
      }
      
}
module.exports = {
    fetchWeatherData,
      filterWeather,
    fetchStoredWeatherData
};
