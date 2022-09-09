import React, {useState} from 'react'
import "./weather.css"

const Weather = () => {
    let today = new Date();
    let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    let hr = today.getHours();
    console.log(hr)
    const [weatherData, setWeatherData] = useState(null);
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
                        document.getElementsByTagName('body')[0].style.backgroundImage = "url('https://wallpaper.dog/large/10981227.jpg')";
                    break;
                    case "Clear":
                        document.getElementsByTagName('body')[0].style.backgroundImage = "url('https://wallpapers.com/images/hd/hd-blue-sky-wallpaper-full-hd-picture-mvehfqz6w2ges2dj.jpg')";
                    break;
                    case "Rain":
                        document.getElementsByTagName('body')[0].style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/2016/03/Free-cloud-wallpaper-HD.jpg')"
                    break;
                    case "Snow":
                        document.getElementsByTagName('body')[0].style.backgroundImage = "url('https://wallpaperaccess.com/full/435550.jpg')";
                    break;
                    case "Drizzle":
                        document.getElementsByTagName('body')[0].style.backgroundImage = "url('https://images.pexels.com/photos/268917/pexels-photo-268917.jpeg?cs=srgb&dl=pexels-pixabay-268917.jpg&fm=jpg')";
                    break;
                    case "Thunderstorm":
                        document.getElementsByTagName('body')[0].style.backgroundImage = "url('https://images.pexels.com/photos/1118869/pexels-photo-1118869.jpeg')";
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
                    <p style={{fontSize: "30px", marginLeft: "30px"}}>This is {weatherData.weather[0].description}.</p>
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
                <p style={{fontSize: "30px"}}>Welcome!</p>
                )
            }

        </div>
        </>

)}

export default Weather;