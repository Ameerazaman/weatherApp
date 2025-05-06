import { weatherAPI } from "../../services/Axios"

export const getWeather = async (location) => {
    try {
      const response = await weatherAPI.get('/weather', {
        params: { location},
      });
      return response.data; // Return the weather data from the API response
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error fetching weather data');
    }
  };

  export const fetchWeatherData = async () => {
    try {
      const response = await weatherAPI.get('/fetch-weather');
      return response.data; // return the data from the response
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw new Error('Failed to fetch weather data');
    }
  };

  export const filteredData = async (location,fromDate,toDate) => {
    try {
      const response = await weatherAPI.get('/filter-weather', {
        params: {
          location,
          fromDate,
          toDate
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw new Error('Failed to fetch weather data');
    }
  };
  