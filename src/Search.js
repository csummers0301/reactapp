import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import "./App.css";


export default function Search(event) {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState("");
  let [weather, setWeather] = useState("");

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.city,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9613899aeff6104a2852d1a6d28e49cf&units=imperial`;
    axios.get(url).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <button type="submit"className= "Button">Search</button>
    </form>
  );

  if (loaded) {
    return (
  <div>
        {form}
        
        <h1>{city}</h1>
        <ul>
        <li>
          <img src={weather.icon} alt={weather.description} />
          </li>
          </ul>
          <h4>{Math.round(weather.temperature)}°F</h4>
          <ul>
            <li>{weather.description}</li>
          <li>Humidity: {Math.round(weather.humidity)}%</li>
          <li>Wind: {Math.round(weather.wind)}mph</li>
          
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
