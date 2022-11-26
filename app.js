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


// a function that creates a form for adding a new book when the newBook button is clicked

function newBookForm() {
    //set event listener on the newBook button
    const newBookButton = document.querySelector('#newBookButton');
    newBookButton.addEventListener('click', function() {
        //get the form container
        const formContainer = document.querySelector('#formContainer');
        //create a form
        const form = document.createElement('form');
        //create a label and input for the title
        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title: ';
        const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        //create a label and input for the author
        const authorLabel = document.createElement('label');
        authorLabel.textContent = 'Author: ';
        const authorInput = document.createElement('input');
        authorInput.setAttribute('type', 'text');
        authorInput.setAttribute('id', 'author');
        //create a label and input for the number of pages
        const numberOfPagesLabel = document.createElement('label');
        numberOfPagesLabel.textContent = 'Number of Pages: ';
        const numberOfPagesInput = document.createElement('input');
        numberOfPagesInput.setAttribute('type', 'text');
        numberOfPagesInput.setAttribute('id', 'numberOfPages');
        //create a label and input for the have read
        const haveReadLabel = document.createElement('label');
        haveReadLabel.textContent = 'Have Read: ';
        const haveReadInput = document.createElement('input');
        haveReadInput.setAttribute('type', 'text');
        haveReadInput.setAttribute('id', 'haveRead');
        //create a submit button
        const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('id', 'addBookButton');
        submitButton.textContent = 'Submit';
        //append the form elements to the form
        form.appendChild(titleLabel);
        form.appendChild(titleInput);
        form.appendChild(authorLabel);
        form.appendChild(authorInput);
        form.appendChild(numberOfPagesLabel);
        form.appendChild(numberOfPagesInput);
        form.appendChild(haveReadLabel);
        form.appendChild(haveReadInput);
        form.appendChild(submitButton);
        //append the form to the form container
        formContainer.appendChild(form);
    });
}



