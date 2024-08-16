import { useContext } from "react";
import { CurrentWeatherContext } from "../../containers/CurrentWeather";

const Location = () => {
  const { location, country, coord } = useContext(CurrentWeatherContext);
  const { lon, lat } = coord;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-3 text-center text-5xl font-bold">
        {location}, {country}
      </h1>
      <span className="text-xl font-light">
        {Math.abs(lat)}°{lat >= 0 ? "N" : "S"}, {Math.abs(lon)}°
        {lon >= 0 ? "E" : "W"}
      </span>
    </div>
  );
};

export default Location;
