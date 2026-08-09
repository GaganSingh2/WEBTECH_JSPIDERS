import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'
import Error from './Error'
import Loader from './Loader'
import SearchBar from './SearchBar'

function Weather() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const API_KEY = "fb8a05f701964a8691694127260408"
    const getWeather = async () => {

        if (!city.trim()) {
            setError("Please Enter a city name..")
            return
        }
        try {
            setLoading(true)
            setError("")
            const res = await axios.get(
                `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
            );

            setWeather(res.data)
        }
        catch (err) {
            // alert("City Not Found")
            // console.log(err);
            // console.log(err.response);
            // console.log(err.data);
            setWeather(null)
            if(err.response){
                setError(err.response.data.error.message)
            }
            else if(err.request){
                setError("No Internet Connection")
            }
            else{
                setError("Something Went Wrong..")
            }
        }
        finally {
            setLoading(false)
        }
    };
    return (
        <div className='weather-container'>
            <div className='weather-card'>
                
                {/* Serach Bar Component */}
                <h2>Search Weather</h2>
                <SearchBar 
                    city={city}
                    setCity={setCity}
                    getWeather={getWeather}
                />


                {/* Loading Component */}
                {loading && <Loader />}
                
                {/* When location not found like that tyoe of error will occur then this part is run */}
                {error && <Error error={error} />}

                {/* Display Weather Details in Card */}
                {weather && <WeatherCard weather={weather} />}
            </div>

        </div>
    )
}

export default Weather