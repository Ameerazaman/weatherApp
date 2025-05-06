

const { fetchWeatherData, fetchStoredWeatherData, filterWeather } = require('../Service/weatherService');

const getWeather = async (req, res) => {
    console.log("wheather")
  const { location} = req.query;
  try {
    const weatherData = await fetchWeatherData(location);
    console.log(weatherData,"weatherData")
    res.json(weatherData);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

const fetchStoredData = async (req, res) => {
    try {
      const weatherData = await fetchStoredWeatherData();  // Renamed to avoid recursion
      console.log(weatherData);
      res.json(weatherData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong while fetching weather data.' });
    }
  };

  const getFilterWeather = async (req, res) => {
  
  const { location,fromDate,toDate} = req.query;
  console.log(location,fromDate,toDate,"location,fromDate,toDate")
  try {
    const weatherData = await filterWeather(location,fromDate,toDate);
    console.log(weatherData,"weatherData")
    res.json(weatherData);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

module.exports = {
  getWeather,
  fetchStoredData,
  getFilterWeather
};
