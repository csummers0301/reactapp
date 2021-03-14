import "./Search.css";
import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
        <div className="row">
          <div className="col city">
            <div>
     <h1 className="City">{props.info.city}</h1>
      
    <ul>
       <WeatherTemperature fahrenheit={props.info.temperature} />
      <li className="Description text-capitalize">{props.info.description}</li>
      <li className="Humidity">Humidity: {props.info.humidity}%</li>
      <li className="Wind Speed">Wind Speed: {Math.round(props.info.wind)}{""} mph</li>
    </ul>
    </div>
          </div>
          <div className="col icon">
             <img
      className="Icon"
      src= {props.info.icon}
      alt={props.info.description}
    />
      </div>
      </div>
      </div>
  );
}

