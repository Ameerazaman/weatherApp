import { useState } from 'react';
import Filters from '../components/Filters';
import WeatherCard from '../components/WeatherCard';
import WeatherTable from '../components/WeatherTable';
import { validateDates } from '../utils/validation';

const WeatherDashboard = () => {
  const [location, setLocation] = useState('Delhi');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [error, setError] = useState('');
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    const err = validateDates(fromDate, toDate);
    if (err) {
      setError(err);
      return;
    }
    setError('');
    setLoading(true);

    // You would fetch from GraphQL mutation & query here
    // For now mock:
    const today = new Date().toISOString().split('T')[0];
    setWeather({
      location,
      date: today,
      temperature: 32,
      weather: 'clear sky',
      icon: '01d',
    });

    // Mock historical records
    setHistory([
      { location, date: fromDate, temperature: 30, weather: 'clouds', icon: '02d' },
      { location, date: toDate, temperature: 29, weather: 'rain', icon: '10d' },
    ]);

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Weather Dashboard</h1>

      <Filters
        location={location}
        fromDate={fromDate}
        toDate={toDate}
        setLocation={setLocation}
        setFromDate={setFromDate}
        setToDate={setToDate}
      />

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <button
        onClick={handleFetch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
      >
        Fetch Weather
      </button>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          {weather && <WeatherCard data={weather} />}
          {history.length > 0 && <WeatherTable records={history} />}
        </>
      )}
    </div>
  );
};

export default WeatherDashboard;
