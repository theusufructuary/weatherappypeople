import "./App.css";
import Input from "../Input";
import { useState } from "react";

function App() {
  const [cityName, setCityName] = useState("");
  const [cityData, setCityData] = useState([]);

  async function fetchData(city) {
    const response = await fetch(
      `https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${city}%2Cus&lat=35&lon=139&cnt=8&units=metric%20or%20imperial`,
      {
        headers: {
          "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
          "X-RapidAPI-Key":
            "727e08c480msh9b9088d53e375bep189ddfjsn01220a09870a",
        },
      }
    );
    let data = await response.json();
    setCityName(data.city.name);
    setCityData(data.list);
    console.log(data);
  }

  return (
    <div className="App">
      <Input onSubmit={fetchData} />
      {cityName !== "" && <div>search results for: {cityName}</div>}
      <div>
        {cityData.map((data) => {
          return <p key={data.sunrise}>{data.deg}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
