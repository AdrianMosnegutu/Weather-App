const dateToDay = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

function convertDateToDay(date) {
  return dateToDay[new Date(date).getDay()];
}

async function getCurrentWeather(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${import.meta.env.VITE_API_KEY}`,
  );
  if (!response.ok) throw new Error("Invalid location!");

  const jsonResponse = await response.json();
  return {
    location: jsonResponse.name,
    country: jsonResponse.sys.country,
    coord: jsonResponse.coord,
    icon: jsonResponse.weather[0].icon,
    temp: jsonResponse.main.temp,
    tempMin: jsonResponse.main.temp_min,
    tempMax: jsonResponse.main.temp_max,
    description: jsonResponse.weather[0].description,
    feelsLike: jsonResponse.main.feels_like,
    humidity: jsonResponse.main.humidity,
    visibility: jsonResponse.visibility,
    windSpeed: jsonResponse.wind.speed,
    windDirection: jsonResponse.wind.deg,
    pressure: jsonResponse.main.pressure,
  };
}

async function getWeekWeather(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${import.meta.env.VITE_API_KEY}`,
  );
  if (!response.ok) throw new Error("Invalid location!");

  const jsonResponse = await response.json();
  return jsonResponse.list
    .filter((data) => data.dt_txt.includes("15:00:00"))
    .map((data) => ({
      icon: data.weather[0].icon,
      temp: Math.floor(data.main.temp),
      day: convertDateToDay(data.dt_txt),
    }));
}

export { getCurrentWeather, getWeekWeather };
