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

const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkein', "295", 'have read')
const neuroman = new Books('Neuromancer', 'William Gibson', "272", 'have read')
const crimeAndPunishment = new Books('Crime and Punishment', 'Fyodor Dostoyevsky', "672", 'have read')
const doAndroidsDream = new Books('Do Androids Dream of Electric Sheep?', 'Philip K. Dick', "256", 'have read')
const snowCrash = new Books('Snow Crash', 'Neal Stephenson', "470", 'have not read')

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    let book = new Books(title, author, pages, read);
    myLibrary.push(book);
    console.log(myLibrary);
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

displayBooks();





