import React, {useState} from 'react'
import "./weather.css"

const Weather = () => {
    let today = new Date();
    let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    let hr = today.getHours();
    console.log(hr)
    const [weatherData, setWeatherData] = useState(null);
    const [weatherBackground, setWeatherBackground] = useState("https://wallpapers.com/images/hd/hd-blue-sky-wallpaper-full-hd-picture-mvehfqz6w2ges2dj.jpg")
    const handleSubmit =  (e) => {
        e.preventDefault();

        fetch("http://localhost:5050/weather")
        .then((response) => { 
            if (response.ok) { // Checks server response (if there is one) 
                return response.json();
            } else {
                throw new Error("Bad response");
            }})
        .then((data) => 
            {
                setWeatherData(data);
                switch(data.weather[0].main) {
                    case "Clouds":
                        console.log("hi");
                        document.getElementsByTagName('body')[0].style.backgroundImage = "url('https://wallpaper.dog/large/10981227.jpg')";
                    break;
                    case "Clear":
                        console.log("hi")
                        document.getElementsByTagName('body')[0].style.backgroundImage = "url('https://wallpapers.com/images/hd/hd-blue-sky-wallpaper-full-hd-picture-mvehfqz6w2ges2dj.jpg')";
                    break;
                    case "Rain":
                        setWeatherBackground("");
                    break;
                    case "Snow":
                        setWeatherBackground("");
                    break;
                    case "Drizzle":
                        setWeatherBackground("");
                    break;
                    case "Thunderstorm":
                        setWeatherBackground("");
                    break;
                }
            }) 
    
}

console.log(weatherData)
  return (
    <>
        <div className="weather">
            <div>
                <form onSubmit={handleSubmit} >
                    <input type="submit" value="Get Weather" onSubmit={handleSubmit} />
                </form>
            </div>
            { weatherData ? weatherData  === "404" ? (
                `The city is not valid: Enter a valid city`
            ) : (
                <>
                <div>
                    <p style={{fontSize: "30px"}}>This is {weatherData.weather[0].description}.</p>
                    <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].main}/>
                    <p>Temp: {weatherData.main.temp}°F</p>
                    <p>Weather: {weatherData.weather[0].main}</p>
                    <p>Temp Range: {weatherData.main.temp_min}°F/ {weatherData.main.temp_max}°F</p>
                    <p>Humidity: {weatherData.main.humidity}% </p> 
                </div>
                <div className="city">
                    <p style={{fontSize: "100px", marginTop: "300px", marginLeft: "550px", textShadow: "2px 2px 4px #000000", color:"white"}}>{weatherData.name}</p>
                </div>
                </>
            ) : (
                <p>Welcome!</p>
                )
            }

        </div>
        </>

)}

export default Weather;