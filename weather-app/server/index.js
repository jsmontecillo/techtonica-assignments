//This will be the server index
import express from 'express';
import cors from 'cors';
import {config} from "dotenv";
config();

const app = express();
const PORT = 5050;

//configuring cors middleware
app.use(cors());

app.get('/', (req,res) => {
    res.json("Hello from Techtonica");
});

const cities = ["london", "los angeles", "chicago", "new york", "tokyo", "austin", "las vegas", "new orleans", "seattle", "miami"]

app.get("/weather", (req,res) => {
    const city = cities[Math.floor(Math.random() * cities.length)];
    const apiKey = process.env.REACT_API_KEY;
    const params = new URLSearchParams({
        q: city,
        APPID: process.env.REACT_API_KEY,
        units: "imperial",
    });
    const url = `https://api.openweathermap.org/data/2.5/weather?${params}`; 
    console.log(url);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
         res.send(data);
     })
     .catch((err) => {
         console.log(err);
     });
});

app.listen(PORT, () => console.log(`hola, server running on ${PORT}`));