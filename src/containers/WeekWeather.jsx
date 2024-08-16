import PropTypes from "prop-types";
import DayWeather from "../components/WeekForecast/DayWeather";

const WeekWeather = ({ weatherData }) => {
  return (
    <ul className="flex cursor-default gap-1 overflow-hidden rounded-b-2xl bg-white bg-opacity-25">
      {weatherData.map((dayWeatherData, index) => (
        <DayWeather weatherData={dayWeatherData} key={index} />
      ))}
    </ul>
  );
};

WeekWeather.propTypes = {
  weatherData: PropTypes.array.isRequired,
};

export default WeekWeather;
