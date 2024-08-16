import { useContext } from "react";
import { CurrentWeatherContext } from "../../containers/CurrentWeather";

const Location = () => {
  const { location, country, coord } = useContext(CurrentWeatherContext);
  const { lon, lat } = coord;

  return (
    <div>
      <h1>
        {location}, {country}
      </h1>
      <span>
        {Math.abs(lon)}°{lon >= 0 ? "N" : "S"}, {Math.abs(lat)}°
        {lat >= 0 ? "W" : "E"}
      </span>
    </div>
  );
};

export default Location;
