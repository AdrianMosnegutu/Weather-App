import PropTypes from "prop-types";
import { convertDateToDay } from "../../utils/convertDateToDay";

const DayWeather = ({ weatherData, key }) => {
  const { icon, temp, date } = weatherData;
  const day = convertDateToDay(date);

  return (
    <li key={key}>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="weather icon"
      />
      <div>
        <h3>{day}</h3>
        <span>{temp}°C</span>
      </div>
    </li>
  );
};

DayWeather.propTypes = {
  weatherData: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
  }).isRequired,
  key: PropTypes.number.isRequired,
};

DayWeather.propTypes = {
  key: PropTypes.number.isRequired,
};

export default DayWeather;
