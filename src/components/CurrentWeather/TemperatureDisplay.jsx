import { useContext } from "react";
import { CurrentWeatherContext } from "../../containers/CurrentWeather";

const TemperatureDisplay = () => {
  const { temp, tempMin, tempMax } = useContext(CurrentWeatherContext);
  let percentage = Math.floor(((temp - tempMin) / (tempMax - tempMin)) * 100);

  return (
    <div className="w-fill flex h-9 items-center gap-5">
      <span className="text-2xl">{tempMin}°C</span>
      <div className="flex h-5 w-full items-center justify-start rounded-full bg-white">
        <div
          style={{ width: `${percentage}%` }}
          className={`bg-accent h-full rounded-full`}
        />
      </div>
      <span className="text-2xl">{tempMax}°C</span>
    </div>
  );
};

export default TemperatureDisplay;
