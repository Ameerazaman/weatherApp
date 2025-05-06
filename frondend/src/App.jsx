import React, { useEffect, useState } from 'react';
import Filters from './Componants/Filters';
import WeatherCard from './Componants/WeatherCard';
import WeatherTable from './Componants/WeatherTable';
import axios from 'axios';
import { fetchWeatherData, filteredData, getWeather } from './Api/Weather';

export function validateDates(from, to) {
  if (!from || !to) return 'Both dates are required';
  const fromDate = new Date(from);
  const toDate = new Date(to);

  if (fromDate > toDate) return 'To Date must be after From Date';

  const diff = (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24);
  if (diff > 30) return 'Date range should not exceed 30 days';

  return null;
}

const CITIES = ['Delhi', 'Moscow', 'Paris', 'New York', 'Sydney', 'Riyadh'];

const App = () => {
  const [location, setLocation] = useState('Delhi');
  const [filterlocation, setfilterlocation] = useState('Delhi');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [error, setError] = useState('');
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getWeatherData = async () => {
      if (!location) return;

      setLoading(true);
      try {
        const data = await fetchWeatherData(location, fromDate, toDate); // Fetch all weather data
        console.log(data, "Fetched Weather Data");

        setWeather(data[0] || null);  // Optionally set the latest weather as current weather
        setHistory((prevHistory) => [...prevHistory, ...data]); // Add the new data to history
      } catch (err) {
        setError('Error fetching weather data');
      } finally {
        setLoading(false);
      }
    };

    getWeatherData();
  }, []); // Run this effect when any of these states change


  const handleFetch = async () => {

    setError('');
    setLoading(true);

    try {
      const data = await getWeather(location); // updated with params
      console.log(data, "data");

      setWeather(data);

      setHistory((prev) => [...prev, data]);
    } catch (err) {
      setError(err?.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const fiteredTable = async () => {
    setLoading(true);
    try {
      const data = await filteredData(filterlocation, fromDate, toDate);
      console.log(data, "filter")
      setWeather(data[0] || null);
      setHistory((prevHistory) => [...prevHistory, ...data]);
    } catch (err) {
      setError('Error fetching filtered weather data');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Weather Dashboard</h1>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4 sm:items-center">
          <label htmlFor="place" className="block text-sm font-semibold text-gray-700">Select Place</label>
          <select
            id="place"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-2 px-4 py-2 border border-gray-300 rounded w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {CITIES.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Fetch Weather Button */}
        <button
          onClick={handleFetch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mx-4 mb-4 w-full sm:w-auto"
        >
          Fetch Weather
        </button>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <>
            {weather && <WeatherCard data={weather} />}
            {history.length > 0 && (
              <>
                <Filters
                  location={filterlocation}
                  fromDate={fromDate}
                  toDate={toDate}
                  setLocation={setfilterlocation}
                  setFromDate={setFromDate}
                  setToDate={setToDate}
                />

                <button
                  onClick={fiteredTable}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4 w-full sm:w-auto"
                >
                  Fetch Filtered Weather
                </button>
              </>
            )}
            {history.length > 0 && <WeatherTable records={history} />}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
