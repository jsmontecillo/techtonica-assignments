import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4040;

app.use(cors());

app.get('/', (req,res) => {
    res.json("Hello from Techtonica");
});

app.get('/api/trivia/', (req,res) => {
    const url = "https://opentdb.com/api.php?amount=5&category=25&difficulty=easy&type=multiple";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    });
});

app.listen(PORT, () => console.log(`Hi! Server running on port http://localhost:${PORT}`));

