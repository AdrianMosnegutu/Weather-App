import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./containers/CurrentWeather";
import WeekWeather from "./containers/WeekWeather";
import mockCurrentWeather from "./data/mockCurrentWeather.json";
import mockWeekWeather from "./data/mockWeekWeather.json";

const App = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="m-auto w-[900px]">
      <div className="rounded-t-2xl bg-white bg-opacity-50 px-12 py-6">
        <SearchBar onLocationChange={setLocation} />
      </div>
      <CurrentWeather weatherData={mockCurrentWeather} />
      <WeekWeather weatherData={mockWeekWeather} />
    </div>
  );
};

export default App;
