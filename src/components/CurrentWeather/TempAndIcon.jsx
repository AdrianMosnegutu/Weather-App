import { useContext } from "react";
import { CurrentWeatherContext } from "../../containers/CurrentWeather";

const TempAndIcon = () => {
  const { icon, temp } = useContext(CurrentWeatherContext);

  return (
    <div>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="weather icon"
      />
      <h2>{temp}°C</h2>
    </div>
  );
};

export default TempAndIcon;
