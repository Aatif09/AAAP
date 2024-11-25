import React from 'react';
import './WeatherCard.css'; // Import the CSS styles for WeatherCard

const WeatherCard = ({ cityData }) => {
  if (!cityData) return null;

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h3 className="city-name">{cityData.name}</h3>
        <p className="weather-description">{cityData.weather[0].description}</p>
      </div>
      <div className="weather-card-body">
        <div className="weather-item">
          <strong>Temperature:</strong> {cityData.main.temp}°C
        </div>
        <div className="weather-item">
          <strong>Humidity:</strong> {cityData.main.humidity}%
        </div>
        <div className="weather-item">
          <strong>Wind Speed:</strong> {cityData.wind.speed} m/s
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
