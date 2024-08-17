import PropTypes from "prop-types";

const DayWeather = ({ weatherData, key }) => {
  const { icon, temp, day } = weatherData;

  return (
    <li
      className="flex h-24 w-full items-center justify-center gap-4 bg-white bg-opacity-25"
      key={key}
    >
      <img
        className="aspect-square w-16 rounded-full bg-white bg-opacity-25"
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="weather icon"
      />
      <div className="flex flex-col items-start justify-center text-white">
        <h3 className="text-2xl font-bold">{day}</h3>
        <span>{temp}°C</span>
      </div>
    </li>
  );
};

DayWeather.propTypes = {
  weatherData: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    day: PropTypes.string.isRequired,
  }).isRequired,
  key: PropTypes.number.isRequired,
};

export default DayWeather;
