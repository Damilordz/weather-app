# Weather App

This is a React-based web application that allows users to check the current weather conditions for a specified city or their current location.

![Weather App Screenshot]()

## Features

- View current weather information, including temperature, weather condition, wind speed, and humidity.
- Search for weather conditions by entering a city name.
- Automatically detect and display weather conditions for the user's current location (requires permission).
- Responsive design using Bootstrap.
- Display a loading indicator while fetching weather data from the API.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- npm (typically comes bundled with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Damilordz/weather-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Obtain an API key from WeatherAPI.com. This is required to fetch weather data from their API.
5. Create a ```.env ``` file in the root directory of the project and add your API key:
   ```bash
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```
   Replace ```your_api_key_here``` with the actual API key you obtained from WeatherAPI.com.

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
   This will start the application and open it in your default browser at http://localhost:3000.
2. Upon opening the application, it will automatically request permission to access your location and display the current weather conditions for your area. If you deny the location permission, you can still use the application by manually entering a city name.
3. To check the weather for a specific location, enter the city name in the input field and press Enter or click the search button.
4. The application will fetch and display the current weather information for the specified city or your location, including temperature, weather condition, wind speed, and humidity.


## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.