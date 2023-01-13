import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project is coded by{" "}
          <a
            href="insertlink"
            target="_blank"
            rel="noreferrer"
            className="footer"
          >
            Amy Jonsson
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/amyjtechwriter/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="footer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="insertlink"
            target="_blank"
            rel="noreferrer"
            className="footer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
