import "./App.css";
import Input from "../Input";
import Card from "../Card";
import { useState } from "react";
import API_KEY from "../../config";

function App() {
  const [cityName, setCityName] = useState("");
  const [cityData, setCityData] = useState([]);

  async function fetchData(city) {
    const response = await fetch(
      `https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${city}%2Cus&lat=35&lon=139&cnt=8&units=metric%20or%20imperial`,
      {
        headers: {
          "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
          "X-RapidAPI-Key": API_KEY,
        },
      }
    );
    let data = await response.json();
    setCityName(data.city.name);
    setCityData(data.list);
    console.log(data);
    console.log("date", data.list[0].dt);
  }

  return (
    <div className="App">
      <h1>Your Weather</h1>
      <Input onSubmit={fetchData} />
      {cityName !== "" && <div>Search results for: {cityName}</div>}
      <div className="weatherData">
        {cityData.map((data) => {
          return (
            <Card
              key={data.sunrise}
              date={data.dt}
              tempMax={data.temp.max}
              tempMin={data.temp.min}
              desc={data.weather[0].description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
