import React,{useState} from "react";
import axios from"axios";
import "./WeatherForecast.css"


export default function WeatherForecast(props){
        const [loaded, setLoaded]= useState(false);
        const[forecast,setForecast]=useState(null);

         function handleForecastResponse(response){
             setForecast(response.data);
             setLoaded(true);
             }
if (loaded){
    return(
        <div className="WeatherForecast row">
            <div className="col">
           <span className="Time">{new Date(forecast.list[0].dt*1000).getHours()}:00</span>
           <br />
        <span className="Temp">{Math.round(forecast.list[0].main.temp)}°F</span>
        </div>
         <div className="col">
           <span className="Time">{new Date(forecast.list[1].dt*1000).getHours()}:00</span>
           <br />
        <span className="Temp">{Math.round(forecast.list[1].main.temp)}°F</span>
        </div>
       <div className="col">
           <span className="Time">{new Date(forecast.list[2].dt*1000).getHours()}:00</span>
           <br />
        <span className="Temp">{Math.round(forecast.list[2].main.temp)}°F</span>
        </div>
        <div className="col">
           <span className="Time">{new Date(forecast.list[3].dt*1000).getHours()}:00</span>
           <br />
        <span className="Temp">{Math.round(forecast.list[3].main.temp)}°F</span>
        </div>
        <div className="col">
           <span className="Time">{new Date(forecast.list[4].dt*1000).getHours()}:00</span>
           <br />
        <span className="Temp">{Math.round(forecast.list[4].main.temp)}°F</span>
        </div>
        </div>
    
    );

    }else {
    let apiKey=`9613899aeff6104a2852d1a6d28e49cf`;
    let url=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleForecastResponse);
    return null;
}
}