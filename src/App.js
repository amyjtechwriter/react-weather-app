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
            href="https://www.linkedin.com/in/amy-j%C3%B6nsson-85840b158/"
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
            href="https://resilient-chimera-345e7e.netlify.app/"
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
