import React from 'react';

const CITIES = ['Delhi', 'Moscow', 'Paris', 'New York', 'Sydney', 'Riyadh'];

const Filters = ({ location, fromDate, toDate, setLocation, setFromDate, setToDate }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4"
      >
        {CITIES.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <input
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4"
      />
      <input
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4"
      />
    </div>
  );
};

export default Filters;
