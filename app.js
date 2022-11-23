let myLibrary = [];

// write a constructor for makkng "Book" objects

function Book(title, author, numberOfPages, haveRead) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.haveRead = haveRead
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.numberOfPages}, ${this.haveRead}.`;
    }
}

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkein', '295 pages', "have read")



// take user input and store it in myLibrary array

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let numberOfPages = document.querySelector('#numberOfPages').value;
    let haveRead = document.querySelector('#haveRead').value;
    let book = new Book(title, author, numberOfPages, haveRead);
    myLibrary.push(book);
    console.log(myLibrary);
    
}

