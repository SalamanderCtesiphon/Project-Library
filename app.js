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

// display the books in myLibrary array on the page

function displayBooks() {
    //set event listener on the display button
    const addBookButton = document.querySelector('#addBookButton');
    addBookButton.addEventListener('click', function() {
        //get the book container
        const bookContainer = document.querySelector('#bookContainer');
        //loop through the myLibrary array
        for (let i = 0; i < myLibrary.length; i++) {
            //create a new div for each book
            const bookDiv = document.createElement('div');
            //add a class to the div
            bookDiv.classList.add('book');
            //add the book info to the div
            bookDiv.textContent = myLibrary[i].info();
            //append the div to the book container
            bookContainer.appendChild(bookDiv);
        }
    });
}





