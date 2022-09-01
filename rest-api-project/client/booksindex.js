async function showBooks() {
    const URL = 'http://localhost:8080/api/books';
    const response = await fetch(URL);
    const responseBooks = await response.json();
    const imagesArray = ['kafka.jpg', 'communion.png', 'woolf.jpg', 'kawakami.jpg', 'wallace.jpg', 'fisher.jpg', 'plath.jpg', 'russell.jpg', 'yoshi.jpg', '1q84.jpg', 'mind.jpg'];
    let i = 0;
    for(let book of responseBooks){
        const card = `<div class="col-4">
        <div class="card">
        <div class="card-body">
        <h5 class="class-title">${book.title}</h5>
        <img src=${imagesArray[i]} alt=${book.title} width='100' class="book-image"/><br>
        <button type="button" class="delete">Delete</button>
        <button type="button" class="edit">Edit</button>
        </div>
        </div>
        </div>`
        document.getElementById("books").innerHTML = document.getElementById("books").innerHTML + card;
        i++;
    }
}

async function postBook() {
    const URL = 'http://localhost:8080/book';
    const response = await fetch(URL);
}
//how user can delete a book
//change html to have a button for deleting
showBooks();