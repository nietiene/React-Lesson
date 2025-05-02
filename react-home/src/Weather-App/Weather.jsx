import React, { useState } from "react";

const   Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
   
    //  https://home.openweathermap.org/api_keys FOR API_KEY

    const API_KEY = "755481f6cc2d8cc1b46fd328278b7dc6";
        
        const GetWeather = async () => {
              try{
                setError(null); // Clear Previous Error
                setWeather(null); // Clear previous Weather Data

                const Results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
           
                if(!Results.ok) {
                     const errData = await Results.json(); // This will validate our Weather App
                    throw new Error(errData.message || "Some thing Went Wrong"); // Also this
                  } else {
                    const response = await Results.json(); 
                    setWeather(response); // Store Data in state
                  }
                
              } catch (err) {
                setError(err);
              }
        }
    


    return (
        <div>
            <h2>Weather App</h2>
            <input type="text" value={city} 
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            /> <br />
           <button onClick={GetWeather}>Get Weather</button>
          
          {error && (<p style={{color: 'red' }}>{error.message}</p>)}
          {weather && (
            <div>
               <h2>Results</h2>
               <p>City Name: {weather.name}</p>
               <p>Descrition: {weather.weather[0].description}</p>
               <p>Temperature: {weather.main.temp}</p>
               <p>Humidity: {weather.main.humidity}%</p>
               <p>Wind: {weather.wind.speed}</p>
            </div>
          )}
        </div>
    )
}
export default Weather;