import axios from "axios";
import React, { useEffect, useState } from "react";
const MY_API_KEY = '3f7f55253ef7776f44676c6d317f0be5'

export default function Weather() {
    const [city, setCity] = useState('')
    const [weatherData,setWeatherData] = useState(null) 

    // Handle input inchange
    const handleInputChange =(e)=>{
        setCity(e.target.city)

    }
    // fetch data
    const fetchData = async ()=>{
        // fetch from api
    const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid={MY_API_KEY}` )
    setWeatherData(response.data)
    // see if data exists
    console.log(weatherData)

    }

    useEffect(()=>{
        fetchData()
    },[])
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
