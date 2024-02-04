import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <div>
        <div className="title">
          <h1 className="weather-title">Weather Fore Cast App</h1>
        </div>
        <div className="container">
          <section className="side-container"></section>

          <Weather />
        </div>
      </div>
    </>
  );
}

export default App;
