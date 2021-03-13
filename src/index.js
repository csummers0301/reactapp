import { StrictMode } from "react";
import Weather from "./Weather";
import "./App.css";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Weather defaultCity="New York"/>
        </div>
        <footer>
        <a href="https://github.com/csummers0301/testingreactapp">
          Open-source code{" "}
        </a>
        by Cristine Summers
        </footer>
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
