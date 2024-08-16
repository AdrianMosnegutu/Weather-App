import { useContext } from "react";
import { CurrentWeatherContext } from "../../containers/CurrentWeather";

const TemperatureDisplay = () => {
  const { temp, tempMin, tempMax } = useContext(CurrentWeatherContext);

  return (
    <div>
      <span>{tempMin}°C</span>
      <div>
        <div />
      </div>
      <span>{tempMax}°C</span>
    </div>
  );
};

export default TemperatureDisplay;
