import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Weather.css";
import Card from "./Card";


export default function Weather() {
  const [city, setCity] = useState("nairobi");
  const [weatherData, setWeatherData] = useState(null);
  const api_key= "3f7f55253ef7776f44676c6d317f0be5";

  // Handle input inchange
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  // if (city.trim() === "") {
  //   console.log("City name is required.");
  //   return;
  // }
  // fetch data
  const fetchData = async () => {
    // fetch from api
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
      );
      setWeatherData(response.data);
      // see if data exists
      console.log(weatherData);
    } catch (error) {
      console.log(error);
    }
  };
  //   date
  const date = new Date();
  console.log(date);
  // format to string
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString(undefined, options);

  useEffect(() => {
    fetchData();
  }, []);
  // handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <div>
      <h2 style={{ paddingLeft: "1rem" }}>{formattedDate}</h2>
      <section className="search-container">
        <form>
          <div className="search-input">
            <input
              type="text"
              value={city}
              onChange={handleInputChange}
              placeholder="Enter city name"
            />
          </div>
          <div className="weather-button">
            <button onClick={handleSubmit}>Get Weather</button>
          </div>
        </form>
      </section>

      <section className="cards-container">
        <h1>Name:</h1>
        <div className="flex-box">
          <Card name="Temperatute" />
          <Card name="Description" />
        </div>

        <div className="flex-box">
          <Card name="Feels like" />
          <Card name="Humidity" />
        </div>
        <div className="flex-box">
          <Card name="Pressure" />
          <Card name="Wind Speed" />
        </div>
      </section>
    </div>
  );
}
