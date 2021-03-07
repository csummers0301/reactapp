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
            <Search />
          </div>
          <div className="col">
            <div className="col date">
              <Date />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST7VGzOV6_po63PLOs3Ar3bMcpPAlU0M4jKQ&usqp=CAU" alt="hiking" />
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
