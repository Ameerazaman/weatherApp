// const WeatherCard = ({ data }) => {
//   return (
//     <div className="bg-white shadow rounded p-4 text-center w-full md:w-1/3 mx-auto">
//       <h2 className="text-xl font-semibold mb-2">{data.location}</h2>
//       <p>{data.date}</p>
//       <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="weather-icon" className="mx-auto" />
//       <p className="text-2xl">{data.temperature}°C</p>
//       <p className="capitalize">{data.weather}</p>
//     </div>
//   );
// };

// export default WeatherCard;
import React, { useState } from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="bg-orange-100 text-orange-900 rounded-3xl shadow-lg p-6 w-full max-w-md mx-auto">
      <div className="text-center">
        <p className="text-lg font-semibold"></p>
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt="weather-icon"
          className="mx-auto w-20 h-20"
        />
        <p className="text-6xl font-bold mt-2">{data.temperature}°C</p>
        <p className="text-xl capitalize">{data.weather}</p>
        <p className="mt-1 font-medium">{data.location}</p>
        <p className="text-sm text-gray-600">{data.date}</p>
        <p className="text-sm mt-1">
          Feels like: {data.feels_like}°C | Sunset: {data.sunset}
        </p>
      </div>

      

      {/* Random Description */}
      <div className="bg-white bg-opacity-40 mt-4 p-3 rounded-xl text-xs text-gray-700">
        <p>
          Improve him believe opinion offered met and end cheered. Friendly as
          stronger speedily by recurred. Son interest wandered sir addition end
          say. Manners beloved afforded picture men ask.
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
