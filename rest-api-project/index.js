//this will be your express server
import express from "express";
import cors from "cors";
//import books from "./books.js"
import path from 'path';
import bodyParser from 'body-parser';


const app = express();
const PORT = 8080;
let books = [{
    "isbn": "1",
    "title": "Kafka on the Shore",
    "author": "Haruki Murakami",
    "format": "Paperback",
    "image": "kafka.jpg"
},
{
    "isbn": "2",
    "title": "Communion: The Female Search for Love",
    "author": "bell hooks",
    "format": "Paperback",
    "image": "communion.png"
},
{
    "isbn": "3",
    "title": "A Room of One's Own",
    "author": "Virginia Woolf",
    "format": "Paperback",
    "image": "woolf.jpg"
},
{
    "isbn": "4",
    "title": "Breasts and Eggs",
    "author": "Mieko Kawakami",
    "format": "Hardcover",
    "image": "kawakami.jpg"
},
{
    "isbn": "5",
    "title": "Infinite Jest",
    "author": "David Foster Wallace",
    "format": "Hardcover",
    "image": "wallace.jpg"
},
{
    "isbn": "6",
    "title": "Capitalist Realism",
    "author": "Mark Fisher",
    "format": "Hardcover",
    "image": "fisher.jpg"
},
{
    "isbn": "7",
    "title": "The Bell Jar",
    "author": "Sylvia Plath",
    "format": "E-book",
    "image": "plath.jpg"
},
{
    "isbn": "8",
    "title": "Glitch Feminism",
    "author": "Legacy Russell",
    "format": "Hardcover",
    "image": "russell.jpg"
},
{
    "isbn": "9",
    "title": "Kitchen",
    "author": "Banana Yoshimoto",
    "format": "Hardcover",
    "image": "yoshi.jpg"
},
{
    "isbn": "10",
    "title": "1Q84",
    "author": "Haruki Murakami",
    "format": "Hardcover",
    "image": "1q84.jpg"
},
{
    "isbn": "11",
    "title": "Kindly Bent to Ease Us: Mind",
    "author": "Longchenpa",
    "format": "Hardcover",
    "image": "mind.jpg"
}
];
// configuring cors middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
    res.send(isbn);
});

app.post('/book', (req,res) => {
    const book = req.body;
    // Output the book to the console for debugging
    books.push(book);
    res.send('Book has been added');
});

app.delete('/book/:isbn', (req,res) => {
    const isbn = req.params.isbn;
    // Remove item from the books array
    console.log(isbn);
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });
    console.log(books);

    res.send('Book is deleted');
});
