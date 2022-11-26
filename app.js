let myLibrary = [];

// write a constructor for makkng "Book" objects

function Book(title, author, numberOfPages, haveRead, notRead) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.haveRead = haveRead
    this.notRead = notRead
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.haveRead}.`;
    }
}

// a function to add a book to the myLibrary array

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numberOfPages = document.getElementById('pages').value;
    const haveRead = document.getElementById('haveRead').value;
    const notRead = document.getElementById('notRead').value;
    const book = new Book(title, author, numberOfPages, haveRead, notRead);
    myLibrary.push(book);
    console.log(myLibrary);
}
 
// an event listener for the new book button that creates a form to add a new book

const newBook = document.getElementById('new-book');

newBook.addEventListener('click', inputNewBook);

function inputNewBook () {
    newBook.remove();
    const form = document.createElement('form');
    form.setAttribute('id', 'form');
    form.innerHTML = `
        <label for="title">Title</label>
        <input type="text" name="title" id="title">
        <label for="author">Author</label>
        <input type="text" name="author" id="author">
        <label for="pages">Number of Pages</label>
        <input type="number" name="pages" id="pages">
        <label for="haveRead">Have Read</label>
        <input type="radio" name="haveRead" id="haveRead" value="have read">
        <label for="notRead">Not Read</label>
        <input type="radio" name="notRead" id="notRead" value="not read">
        <input type="submit" value="Submit" id="submit">
    `;
    const container = document.querySelector('.container');
    container.style.border = '1px solid black';
    container.style.backgroundColor = 'lightgrey';
    container.style.width = '35vh';
    container.style.height = '40vh';    
    container.appendChild(form);
    submit = document.getElementById('submit');
    submit.addEventListener('click', addBookToLibrary);
    submit.addEventListener('click', clearContainer);
    submit.addEventListener('click', displayBooks);
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    });
}

// a function to remove the form from the page and display the new book button

function clearContainer() {
    const form = document.getElementById('form');
    form.remove();
    const container = document.querySelector('.container');
    container.style.border = '';
    container.style.backgroundColor = '';
    container.style.width = '';
    container.style.height = '';
    container.appendChild(newBook);
}


// display the books in the myLibrary array inside of the display-container div

function displayBooks() {
    const displayContainer = document.querySelector('.display-container');
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <p>Title: ${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Number of Pages: ${book.numberOfPages}</p>
            <p>Have Read: ${book.haveRead}</p>
            <p>Not Read: ${book.notRead}</p>
        `;
        displayContainer.appendChild(bookDiv);
    });
}











