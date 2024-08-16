import { useContext } from "react";
import { CurrentWeatherContext } from "../containers/CurrentWeather";

const TemperatureMinMax = () => {
  const data = useContext(CurrentWeatherContext);

  return (
    <div>
      <span>{data.tempMin}°C</span>
      <div>
        <div />
      </div>
      <span>{data.tempMax}°C</span>
    </div>
  );
};

export default TemperatureMinMax;
