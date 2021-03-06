import React, { useState } from "react";
import axios from "axios";

export default function Search(event) {
  let [city, setCity] = useState("");
  let [data, setData] = useState("");

  function weatherInfo(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9613899aeff6104a2852d1a6d28e49cf&units=imperial`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function showWeather(response) {
    setData(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°F</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity} %</li>
        <li> Wind Speed: {Math.round(response.data.wind.speed)} mph</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="Icon"
          />
        </li>
      </ul>
    );
  }

  return (
    <div className="Search">
      <form onSubmit={weatherInfo}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{data}</h2>
    </div>
  );
}
