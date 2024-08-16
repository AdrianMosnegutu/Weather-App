import { useContext } from "react";
import {
  FaBinoculars,
  FaCompass,
  FaInfoCircle,
  FaTachometerAlt,
  FaThermometerHalf,
  FaWind,
} from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { CurrentWeatherContext } from "../../containers/CurrentWeather";
import WeatherProperty from "./WeatherProperty";

const WeatherDetails = () => {
  const data = useContext(CurrentWeatherContext);

  return (
    <ul>
      <WeatherProperty
        name="Description"
        icon={<FaInfoCircle />}
        value={data.description}
      />
      <li>
        <ul>
          <WeatherProperty
            name="Feels Like"
            icon={<FaThermometerHalf />}
            value={`${data.feelsLike}°C`}
          />
          <WeatherProperty
            name="Humidity"
            icon={<FaDroplet />}
            value={`${data.humidity}%`}
          />
          <WeatherProperty
            name="Visibility"
            icon={<FaBinoculars />}
            value={`${data.visibility / 1000} km`}
          />
        </ul>
      </li>
      <li>
        <ul>
          <WeatherProperty
            name="Wind Speed"
            icon={<FaWind />}
            value={`${data.windSpeed} m/s`}
          />
          <WeatherProperty
            name="Wind Direction"
            icon={<FaCompass />}
            value={`${data.windDirection}°`}
          />
          <WeatherProperty
            name="Pressure"
            icon={<FaTachometerAlt />}
            value={`${data.pressure} hPa`}
          />
        </ul>
      </li>
    </ul>
  );
};

export default WeatherDetails;
