import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4040;

app.use(cors());

app.get('/', (req,res) => {
    res.json("Hello from Techtonica");
});

app.get('/api/trivia/art', (req,res) => {
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

app.get('/api/trivia/general', (req,res) => {
    const url = "https://opentdb.com/api.php?amount=5&category=9&type=multiple";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/api/trivia/animals', (req,res) => {
    const url = "https://opentdb.com/api.php?amount=5&category=27&type=multiple";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/api/trivia/music', (req,res) => {
    const url = "https://opentdb.com/api.php?amount=5&category=12&type=multiple";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/api/trivia/mythology', (req,res) => {
    const url = "https://opentdb.com/api.php?amount=5&category=20&type=multiple";
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

