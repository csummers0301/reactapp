import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Date from "./Date";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="row">
          <div className="col">
            <h5>What's the weather like in....</h5>
            <Search city="New York"/>
          </div>
          <div className="col">
            <div className="col date">
              <Date />
              <img src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodfreephotos.com%2Fother-landscapes%2Fwaterfall-in-nature.jpg.php&psig=AOvVaw3oHoyMTZck6obU_Y3BK3us&ust=1615240666675000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjzlsOWn-8CFQAAAAAdAAAAABAP" alt="hiking" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col city">
          </div>
          <div className="col">
            </div>
        </div>
      </div>
      <div>
        <a href="https://github.com/csummers0301/weather-app-project">
          Open-source code{" "}
        </a>
        by Cristine Summers
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
