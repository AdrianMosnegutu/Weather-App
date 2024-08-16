import { useContext } from "react";
import { CurrentWeatherContext } from "../../containers/CurrentWeather";

const TempAndIcon = () => {
  const { icon, temp } = useContext(CurrentWeatherContext);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <img
        className="aspect-square w-52 rounded-full bg-white bg-opacity-25"
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="weather icon"
      />
      <h2 className="text-5xl font-light">{temp}°C</h2>
    </div>
  );
};

export default TempAndIcon;
