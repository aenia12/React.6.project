import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Chicago" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/77665-aenia-amin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aenia Amin
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/aenia12/React.5.weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dynamic-lokum-c1135e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
