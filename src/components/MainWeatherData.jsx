import { useContext } from "react";
import { CurrentWeatherContext } from "../containers/CurrentWeather";

const MainWeatherData = () => {
  const data = useContext(CurrentWeatherContext);

  return (
    <div>
      <img src="" alt="weather icon" />
      <h2>{data.temp}°C</h2>
    </div>
  );
};

export default MainWeatherData;
