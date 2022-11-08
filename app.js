function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`The ${title} by ${author}, ${pages} pages, ${read}`)
    }
}

const theHobbit = new Books('The Hobbit', 'J.R.R. Tolkein', "295", 'not read yet')

console.log(theHobbit.info());