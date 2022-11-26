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


// prevent default form submission

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
});







