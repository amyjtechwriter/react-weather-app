import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <p>
      <a href="https://github.com/amyjtechwriter/react-weather-app">
        Open-source code on GitHub{" "}
      </a>{" "}
      by Amy Jonsson
    </p>
    </div>
  </StrictMode>
);