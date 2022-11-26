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

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkein', '295 pages', "have read")



// take user input and store it in myLibrary array when thew submit button is clicked

function addBookToLibrary() {
    //set event listener on the submit button
    const addBookButton = document.querySelector('#addBookButton');
    addBookButton.addEventListener('click', function() {
        //get the user input
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const numberOfPages = document.querySelector('#numberOfPages').value;
        const haveRead = document.querySelector('#haveRead').value;
        //create a new book object
        const newBook = new Book(title, author, numberOfPages, haveRead);
        //push new book object into myLibrary array
        myLibrary.push(newBook);
        //clear the form
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#numberOfPages').value = '';
        document.querySelector('#haveRead').value = '';
    });
}






