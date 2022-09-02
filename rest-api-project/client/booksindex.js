async function showBooks() {
    const URL = 'http://localhost:8080/api/books';
    const response = await fetch(URL);
    const responseBooks = await response.json();
    for(let book of responseBooks){
        const card = `<div class="col-4">
        <div class="card">
        <div class="card-body">
        <h5 class="class-title">${book.title}</h5>
        <img src=${book.image} alt=${book.title} width='100' class="book-image"/><br>
        <button type="button" class="delete" onClick="deleteBook(${book.isbn})">Delete</button>
        <button type="button" class="edit">Edit</button>
        </div>
        </div>
        </div>`
        document.getElementById("books").innerHTML = document.getElementById("books").innerHTML + card;
    }
}

//how user can delete a book
//change html to have a button for deleting
const deleteBook = (isbn) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:8080/book/${isbn}`, false);
    xhttp.send();
    location.reload();
 }
showBooks();