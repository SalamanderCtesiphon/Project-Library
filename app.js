let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`The ${title} by ${author}, ${pages} pages, ${read}`)
    }
}

function addBookToLibrary() {
    // do stuff here
}

// a funtion to loop through the array and display each book on the page

function displayBooks() {
    let bookList = document.getElementById('book-list');
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        book.classList.add('book');
        book.innerHTML = `
            <h3>${myLibrary[i].title}</h3>
            <p>${myLibrary[i].author}</p>
            <p>${myLibrary[i].pages}</p>
            <p>${myLibrary[i].read}</p>
        `;
        bookList.appendChild(book);
        }  
}  

/* const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkein', "295", 'not read yet')

console.log(theHobbit.info());
 */




