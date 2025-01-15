import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){

    let [weatherInfo,setWeatherInfo] = useState({
            city:"Puri",
            feelsLike:21.89,
            temp:21.97,
            tempMax:21.97,
            tempMin:21.97,
            weather:"clear sky",
    });
    
    let updateInfo = (result) => {
        setWeatherInfo(result)
    }
    return(
        <>
        
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </>
    )
}