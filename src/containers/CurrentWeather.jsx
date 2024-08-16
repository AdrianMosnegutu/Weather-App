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
      <div className="flex flex-col gap-12 bg-white bg-opacity-25 p-12 text-white">
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
};

CurrentWeather.propTypes = {
  weatherData: PropTypes.object.isRequired,
};

export default CurrentWeather;
