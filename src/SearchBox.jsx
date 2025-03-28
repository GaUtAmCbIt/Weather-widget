import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import WeatherApp from './WeatherApp';

export default function SearchBox({updateInfo}){

    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = process.env.REACT_APP_API_KEY;


    let getWeatherInfo = async () => {
        try{
            let response  = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        
        let result = {
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            weather:jsonResponse.weather[0].description,
            feelsLike:jsonResponse.main.feels_like,
        }
        console.log(result);
        return result;
        }catch(err){
            throw err
        }
        
    }

    

    let handleChange = (event) => {
        setCity(event.target.value);
        
        
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault(); 
        console.log(city);
        setCity("");
        let res = await getWeatherInfo();
        updateInfo(res);
        }catch(err){
            setError(true)
        }
    }
    return (
       <>
        <div className='SearchBox'>
        <h3>Weather Widget By Gautam</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City-Name" variant="outlined" required value={city} onChange={handleChange}  />
        <br /><br />
        <Button variant="contained" type="submit" >
        Search
      </Button>
        </form>
        {error && <p>No such place exists</p>}
        </div>
       </>
    )
}
