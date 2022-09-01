//this will be your express server
import express from "express";
import cors from "cors";
import books from "./books.js"
import path from 'path';

const app = express();
const PORT = 8080;

// configuring cors middleware
app.use(cors());

//to let the server know what directory we are working on
const __dirname = path.resolve();
app.use(express.static('client'));

//this is an endpoint (consume this info in the frontend)
//creating the /api/books endpoint - GET request
app.get('/api/books', (req, res) => {
    res.json(books);
} )

app.listen(PORT, () => console.log(`hola server running ${PORT}`));

//this is a route
app.get('/', (req,res) => {
    //res.send("Hello Techtonica, this will be my first REST API");
    //opens the index.html file that is in the client folder in your path
    res.sendFile(path.join(__dirname, 'client', 'index.html'))
});

app.get('/book/:isbn', (req,res) => {
    const isbn = req.params.isbn;
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }
    res.status(404).send('Book not found');
})

app.post('/book', (req,res) => {
    const book = req.body;
    console.log(book);
    books.push(book);
    res.send('Book is added to the database');
});

app.delete('/book/:isbn', (req,res) => {
    const isbn = req.params.isbn;
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });
    res.send('Book is deleted');
})