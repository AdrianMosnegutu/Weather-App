import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./containers/CurrentWeather";
import mockCurrentWeather from "./data/mockCurrentWeather.json";

const App = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="m-auto w-[900px]">
      <div className="rounded-t-2xl bg-white bg-opacity-50 px-12 py-6">
        <SearchBar onLocationChange={setLocation} />
      </div>
      <CurrentWeather weatherData={mockCurrentWeather} />
    </div>
  );
};

export default App;
