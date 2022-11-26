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

// prevent default form submission

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
});

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
 
// an event listener to add a book to the myLibrary array when the form is submitted

const submit = document.getElementById('submit');
submit.addEventListener('click', addBookToLibrary);










