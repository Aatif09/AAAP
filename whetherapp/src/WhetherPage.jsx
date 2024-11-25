import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
const WeatherPage = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [searchWeather, setSearchWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'bd5d6db1c55613f81c60eed85271139e'; // Replace with your OpenWeatherMap API key

  const defaultCities = [
    'London', 'New York', 'Tokyo', 'Berlin', 'Paris',
    'Sydney', 'Toronto', 'Mumbai', 'Los Angeles', 'Dubai'
  ];

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
            console.log(data);
      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchDefaultCitiesWeather = async () => {
      const cityWeatherPromises = defaultCities.map((city) => fetchWeather(city));
      const cityWeatherData = await Promise.all(cityWeatherPromises);
      setCities(cityWeatherData.filter((data) => data !== null));
    };

    fetchDefaultCitiesWeather();
  }, []);

  const handleSearch = async () => {
    if (city) {
      const data = await fetchWeather(city);
      setSearchWeather(data);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>

      <div>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Get Weather</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <h2>Weather for Default Cities:</h2>
      <div>
        {cities.map((cityData, index) => (
          <WeatherCard key={index} cityData={cityData} />
        ))}
      </div>

      {searchWeather && (
        <div>
          <h2>Weather for {searchWeather.name}:</h2>
          <WeatherCard cityData={searchWeather} />
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
