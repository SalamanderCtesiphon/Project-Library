

let myLibrary = [];

function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`The ${title} by ${author}, ${pages} pages, ${read}`)
    }
}

//add an event listener to the button to add a book to the library
const addBookButton = document.querySelector('#addBookButton');

addBookButton.addEventListener('click', addBookToLibrary);

// creat a form to input the book details

const form = document.createElement('form');
form.setAttribute('id', 'form');
form.setAttribute('class', 'form');
form.setAttribute('method', 'post');
form.setAttribute('action', '#');

// create a div to hold the form
const formDiv = document.createElement('div');
formDiv.setAttribute('id', 'formDiv');
formDiv.setAttribute('class', 'formDiv');

// append the form to the div
formDiv.appendChild(form);




// a function to add a book to the array

function addBookToLibrary() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;
    const book = new Books(title, author, pages, read);
    myLibrary.push(book);
    console.log(myLibrary);
    displayBooks();
}




// a funtion to loop through the array and display each book on the page





