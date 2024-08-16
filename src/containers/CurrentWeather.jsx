import PropTypes from "prop-types";
import { createContext } from "react";
import {
  Location,
  TempAndIcon,
  TemperatureDisplay,
  WeatherDetails,
} from "../components/CurrentWeather";

export const CurrentWeatherContext = createContext({});

const CurrentWeather = ({ weatherData }) => {
  return (
    <CurrentWeatherContext.Provider value={weatherData}>
      <div>
        <Location />
        <div>
          <TempAndIcon />
          <div>
            <TemperatureDisplay />
            <WeatherDetails />
          </div>
        </div>
      </div>
    </CurrentWeatherContext.Provider>
  );
};

CurrentWeather.propTypes = {
  weatherData: PropTypes.object.isRequired,
};

export default CurrentWeather;
