import PropTypes from "prop-types";

const WeatherProperty = ({ name, icon, value }) => (
  <li>
    {icon}
    <span>
      <strong>{name}</strong>: {value}
    </span>
  </li>
);

WeatherProperty.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
};

export default WeatherProperty;
