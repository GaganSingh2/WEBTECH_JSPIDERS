import React from 'react'

function WeatherCard({ weather }) {
    return (
        <div className='weather-result'>
            <img
                src={weather.current.condition.icon}
                alt="Weather Icon"
            />

            <h1>{weather.current.temp_c}°C</h1>
            <h3>{weather.location.name}, {weather.location.country}</h3>
            <p>{weather.current.condition.text}</p>

            <div className='weather-info'>
                <div className='info-box'>
                    <p>Humidity</p>
                    <h4>{weather.current.humidity}%</h4>
                </div>

                <div className='info-box'>
                    <p>Wind Speed</p>
                    <h4>{weather.current.wind_kph} km/h</h4>
                </div>

                <div className='info-box'>
                    <p>Feels Like</p>
                    <h4>{weather.current.feelslike_c}°C</h4>
                </div>

                <div className='info-box'>
                    <p>Pressure</p>
                    <h4>{weather.current.pressure_mb} mb</h4>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard