let myLibrary = [];

// write a constructor for makkng "Book" objects

function Book(title, author, numberOfPages, haveRead) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.haveRead = haveRead
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
    const book = new Book(title, author, numberOfPages, haveRead);
    myLibrary.push(book);
    console.log(myLibrary);
}
 
addBookToLibrary();








