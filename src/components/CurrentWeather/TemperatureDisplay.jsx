import { useContext } from "react";
import { CurrentWeatherContext } from "../../containers/CurrentWeather";

const TemperatureDisplay = () => {
  const { temp, tempMin, tempMax } = useContext(CurrentWeatherContext);
  let percentage =
    tempMax === tempMin
      ? 100
      : Math.floor(((temp - tempMin) / (tempMax - tempMin)) * 100);

  return (
    <div className="w-fill flex items-center gap-5">
      <p className="text-center text-2xl">
        {tempMin}°C <strong>Low</strong>
      </p>
      <div className="flex h-5 w-full items-center justify-start overflow-hidden rounded-full bg-white">
        <div
          style={{ width: `${percentage}%` }}
          className={`bg-accent h-full rounded-full`}
        />
      </div>
      <p className="text-center text-2xl">
        {tempMax}°C <strong>High</strong>
      </p>
    </div>
  );
};

export default TemperatureDisplay;
