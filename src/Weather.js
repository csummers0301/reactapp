import React,{ useState } from "react";
import "./Weather.css";
import Date from "./Date";
import axios from "axios";
import Icon from "./Icon";

export default function Weather(props) {
  const[weatherInfo, setWeatherInfo]=useState({ ready:false})
  ;
function handleResponse(response){
  console.log(response.data);
  setWeatherInfo({
    ready: true,
    city:response.data.name,
    description: response.data.weather[0].description,
    temperature:response.data.main.temp,
    wind: response.data.wind.speed,
    humidity:response.data.main.humidity,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  });
}
  if(weatherInfo.ready){
    return(
    <div className="Weather">
     <div className="row">
          <div className="col">
      <form className="City Search">
      <input type="text" placeholder="Enter a city" autoFocus="off" />
      <input type="submit" value="Search" className="Button" />
    </form>
          </div>
          <div className="col">
            <div className="col date">
              <Date />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col city">
            <div>
     <h1 className="City">{weatherInfo.city}</h1>;
    <ul>
      <li className="Temperature">{Math.round(weatherInfo.temperature)}{""} F | C</li>
      <li className="Description"className="text-capitalize">{weatherInfo.description}</li>
      <li className="Humidity">Humidity: {weatherInfo.humidity}%</li>
      <li className="Wind Speed">Wind Speed: {Math.round(weatherInfo.wind)}{""} mph</li>
    </ul>
    </div>
          </div>
          <div className="col icon">
             <img
      className="Icon"
      src= {weatherInfo.icon}
      alt={weatherInfo.description}
    />
            </div>
          </div>
          </div>
      
  );
}else{
  const apiKey=`9613899aeff6104a2852d1a6d28e49cf`;
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading";
}
}
