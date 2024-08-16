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
    <ul className="flex flex-col gap-7">
      <WeatherProperty
        name="Description"
        icon={<FaInfoCircle size={20} />}
        value={data.description}
      />
      <li className="flex justify-between">
        <ul className="flex flex-col gap-7">
          <WeatherProperty
            name="Feels Like"
            icon={<FaThermometerHalf size={20} />}
            value={`${data.feelsLike}°C`}
          />
          <WeatherProperty
            name="Humidity"
            icon={<FaDroplet size={20} />}
            value={`${data.humidity}%`}
          />
          <WeatherProperty
            name="Visibility"
            icon={<FaBinoculars size={20} />}
            value={`${data.visibility / 1000} km`}
          />
        </ul>
        <ul className="flex flex-col gap-7">
          <WeatherProperty
            name="Wind Speed"
            icon={<FaWind size={20} />}
            value={`${data.windSpeed} m/s`}
          />
          <WeatherProperty
            name="Wind Direction"
            icon={<FaCompass size={20} />}
            value={`${data.windDirection}°`}
          />
          <WeatherProperty
            name="Pressure"
            icon={<FaTachometerAlt size={20} />}
            value={`${data.pressure} hPa`}
          />
        </ul>
      </li>
    </ul>
  );
};

export default WeatherDetails;
