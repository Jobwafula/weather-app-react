import axios from "axios";
import React, { useState } from "react";

export default function Weather() {
    const [city, setCity] = useState('')

    // Handle input inchange
    const handleInputChange =(e)=>{
        setCity(e.target.city)

    }
    // fetch data
    const fetchData = async ()=>{
        // fetch from api
    const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={YOUR_API_KEY}` )

    }
    // handlesubmit
    const handleSubmit = (e)=>{
        e.preventDefault()
        fetchData()

    }
  return (
    <div>
      <form>
        <input type="text" value={city}  onChange={handleInputChange} placeholder="Enter city name" />
        <button onSubmit={handleSubmit}>Get Weather</button>
      </form>
    </div>
  );
}
