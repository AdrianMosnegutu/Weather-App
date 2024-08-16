import PropTypes from "prop-types";
import { createContext } from "react";
import {
  Location,
  TempAndIcon,
  TemperatureDisplay,
  WeatherDetails,
} from "../components/CurrentWeather";

export const CurrentWeatherContext = createContext({});

const CurrentWeather = ({ weatherData }) => (
  <CurrentWeatherContext.Provider value={weatherData}>
    <div className="flex cursor-default flex-col gap-12 bg-white bg-opacity-25 px-12 py-16 text-white">
      <Location />
      <div className="flex items-center justify-around">
        <TempAndIcon />
        <div className="flex w-7/12 flex-col gap-7">
          <TemperatureDisplay />
          <WeatherDetails />
        </div>
      </div>
    </div>
  </CurrentWeatherContext.Provider>
);

CurrentWeather.propTypes = {
  weatherData: PropTypes.object.isRequired,
};

export default CurrentWeather;
