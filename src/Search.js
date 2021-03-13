import "./Search.css";
import React from "react";
import axios from "axios";



export default function Search() {
const apiKey= `9613899aeff6104a2852d1a6d28e49cf`;
let city="London";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  
  return (
    <form className="City Search">
      <input type="text" placeholder="Enter a city" autoFocus="off" />
      <input type="submit" value="Search" className="Button" />
    </form>
  );
}

