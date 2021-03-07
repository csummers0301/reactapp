import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
      <div>
     <h1 className="City">New York</h1>;
    <ul>
      <li className="Temperature">30° F | C</li>
      <li className="Description">Raining</li>
      <li className="Humidity">Humidity: 50%</li>
      <li className="Wind Speed">Wind Speed: 5 mph</li>
    </ul>
    </div>
  );
}