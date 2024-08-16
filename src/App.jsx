import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./containers/CurrentWeather";
import WeekWeather from "./containers/WeekWeather";
import { getCurrentWeather, getWeekWeather } from "./services/weatherApi";

const notification = (text) => (
  <h4 className="mb-10 text-center text-5xl text-white">{text}</h4>
);

const App = () => {
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [currentWeather, setCurrentWeather] = useState(null);
  useEffect(() => {
    if (!location) return;
    getCurrentWeather(location)
      .then((data) => {
        setCurrentWeather(data);
        setErrorMessage("");
      })
      .catch((error) => !errorMessage && setErrorMessage(error.message));
  }, [location, errorMessage]);

  const [weekWeather, setWeekWeather] = useState(null);
  useEffect(() => {
    if (!location) return;
    getWeekWeather(location)
      .then((data) => {
        setWeekWeather(data);
        setErrorMessage("");
      })
      .catch((error) => !errorMessage && setErrorMessage(error.message));
  }, [location, errorMessage]);

  return (
    <div className="m-auto w-[900px]">
      {errorMessage
        ? notification(errorMessage)
        : !currentWeather &&
          !weekWeather &&
          notification("Welcome to my Weather App!")}
      <div
        className={`${(currentWeather || weekWeather) && !errorMessage ? "rounded-t-2xl" : "rounded-2xl"} bg-white bg-opacity-50 px-12 py-6`}
      >
        <SearchBar onLocationChange={setLocation} />
      </div>
      {!errorMessage && currentWeather && (
        <CurrentWeather weatherData={currentWeather} />
      )}
      {!errorMessage && weekWeather && (
        <WeekWeather weatherData={weekWeather} />
      )}
    </div>
  );
};

export default App;
