import React from "react";

// Component to display the weather data
const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="card">
      <div className="card-body">
        {/* Display the weather icon */}
        <img
          src={weatherData.current.condition.icon}
          alt="Weather Icon"
          className="mb-2"
        />

        {/* Display the location name and country */}
        <h2 className="card-title">
          {weatherData.location.name}, {weatherData.location.country}
        </h2>

        {/* Display the local time */}
        <p className="card-text">
          <strong>Local Time:</strong> {weatherData.location.localtime}
        </p>

        {/* Display the temperature */}
        <p className="card-text">
          <strong>Temperature:</strong> {weatherData.current.temp_c}°C
        </p>

        {/* Display the weather condition text */}
        <p className="card-text">
          <strong>Weather:</strong> {weatherData.current.condition.text}
        </p>

        {/* Display the humidity */}
        <p className="card-text">
          <strong>Humidity:</strong> {weatherData.current.humidity}%
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;