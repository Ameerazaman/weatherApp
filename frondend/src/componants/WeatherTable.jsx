import { useState } from 'react';

const WeatherTable = ({ records }) => {
    return (
      <div className="p-4">
        {/* Table */}
        <table className="w-full mt-6 table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Temperature</th>
              <th className="p-2 border">Weather</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Icon</th>
            </tr>
          </thead>
          <tbody>
            {records.length > 0 ? (
              records.map((rec, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{rec.location}</td>
                  <td className="border p-2">{rec.temperature}°C</td>
                  <td className="border p-2">{rec.weather}</td>
                  <td className="border p-2">{new Date(rec.date).toLocaleDateString()}</td>
                  <td className="border p-2">
                    <img
                      src={`https://openweathermap.org/img/wn/${rec.icon}@2x.png`}
                      alt="icon"
                      className="w-8 h-8 mx-auto"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
  

export default WeatherTable;
