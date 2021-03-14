import React,{ useState } from "react";
import "./Weather.css";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";
import CurrentDate from "./CurrentDate";
import axios from "axios";


export default function SearchWeather(props) {
  const[weatherInfo, setWeatherInfo]=useState({ ready:false});
  const[city,setCity]=useState(props.defaultCity);
function handleResponse(response){
  console.log(response.data);
  setWeatherInfo({
    ready: true,
    city:response.data.name,
    date:new Date(response.data.dt*1000),
    description: response.data.weather[0].description,
    temperature:response.data.main.temp,
    wind: response.data.wind.speed,
    humidity:response.data.main.humidity,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  });
}
function search(){
  const apiKey=`9613899aeff6104a2852d1a6d28e49cf`;
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

}
function handleSubmit(event){
  event.preventDefault();
  search();
}
function updateCity(event){
  setCity(event.target.value);

}
  if(weatherInfo.ready){
    return(
    <div className="SearchWeather">
     <div className="row">
          <div className="col">
      <form className="City Search" onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a city" autoFocus="on" onChange={updateCity}/>
      <input type="submit" value="Search" className="Button" />
    </form>
    </div>
    <div>
       <div className="col">
            <div className="col date">
              <CurrentDate date={weatherInfo.date}/>
            </div>
          </div>
        </div>
    </div>
    <div>
       <WeatherData info={weatherInfo}/> 
       <hr />
      <WeatherForecast city={weatherInfo.city}/>
    </div>
    <div>
     
    </div>
      </div>
    
        
  );
}else{
  search()
  return "Loading";
}
}
