import React, { useState, useEffect } from "react";

import WeatherDisplay from "./WeatherDisplay";
import FormInput from "./FormInput";

// API key and URL for the Weather API
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_URL = `https://api.weatherapi.com/v1/current.json`;

function Weather() {
  // State variables
  const [city, setCity] = useState(""); // City entered by the user
  const [weatherData, setWeatherData] = useState(null); // Weather data fetched from the API
  const [error, setError] = useState(null); // Error message if any
  const [userLocation, setUserLocation] = useState(null); // User's current location
  const [geolocationError, setGeolocationError] = useState(null); // Error message for geolocation denial
  const [loading, setLoading] = useState(false); // Loading state

  // Get user's current location on component mount
  useEffect(() => {
    setLoading(true); // Set loading state to true

    // When the component mounts, this effect will run

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // If the browser is able to retrieve the user's location successfully
        // Update the state with the user's latitude and longitude
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLoading(false); // Set loading state to false
      },
      (error) => {
        // If there's an error getting the user's location
        if (error.code === 1) {
          // If there's an error getting the user's location
          setLoading(false); // Set loading state to false

          // If the error code is 1, it means the user denied permission
          setGeolocationError(
            "Geolocation access denied. Please enter a city manually."
          );
        } else {
          // For any other error
          setGeolocationError("Error getting user location.");
        }
      }
    );
  }, []); // The empty array means this effect will only run once, on component mount

  // Function to fetch weather data from the API
  async function fetchWeatherData(url) {
    setLoading(true); // Set loading state to true
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data); // Update weather data state
        setError(null); // Clear any previous error
        setGeolocationError(null); // Clear GeoLocation Error
      } else {
        setError(data.error.message); // Set error message
        setWeatherData(null); // Clear weather data
        setGeolocationError(null); // Clear GeoLocation Error
      }
    } catch (error) {
      setError("An error occurred while fetching data."); // Set error message
      setWeatherData(null); // Clear weather data
      setGeolocationError(null); // Clear GeoLocation Error
    } finally {
      setLoading(false); // Set loading state to false
    }
  }

  // Handler for form submission
  const handleSubmit = () => {
    if (city) {
      const url = `${API_URL}?key=${API_KEY}&q=${city}`; // Construct API URL with city
      fetchWeatherData(url); // Fetch weather data for the entered city
    }
  };

  // Fetch weather data for user's location on component mount
  useEffect(() => {
    if (userLocation) {
      const { lat, lon } = userLocation;
      const url = `${API_URL}?key=${API_KEY}&q=${lat},${lon}`; // Construct API URL with user's location
      fetchWeatherData(url); // Fetch weather data for user's location
    }
  }, [userLocation]);

  return (
    <div className="custom-container">
      <div className="mb-4 title">
        <h1>Welcome to Weather App</h1>
        <img
          src={require("../assets/images/weather-logo.png")}
          alt="weather logo"
        />
      </div>

      {/* Display geolocation error message if any */}
      {geolocationError && (
        <p className="lead mb-4 alert alert-danger" role="alert">
          {geolocationError}
        </p>
      )}

      {/* Form input component */}
      <FormInput onSubmit={handleSubmit} city={city} setCity={setCity} />

      {/* Display error message if any, but not the geolocation error */}
      {error && !geolocationError && <p className="text-danger">{error}</p>}

      {/* Display loading indicator */}
      {loading && (
        <div class="d-flex align-items-center">
          <span class="spinner-grow spinner-grow-md mx-4" aria-hidden="true"></span>
          <strong role="status">Loading...</strong>
        </div>
      )}

      {/* Display weather data if available */}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default Weather;
