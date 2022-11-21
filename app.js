// write a constructor for makkng "Book" objects

/* function Book(title, author, numberOfPages, haveRead) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.haveRead = haveRead
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.numberOfPages}, ${this.haveRead}.`;
    }
}

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkein', '295 pages', "have read")

console.log(theHobbit.info()); */

function Student() {

}

Student.prototype.sayName = function() {
    console.log(this.name)
}

function EighthGrader(name) {
    this.name = name
    this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

function NinthGrader(name) {
    this.name = name
    this.grade = 9
}

NinthGrader.prototype = Object.create(Student.prototype)

NinthGrader.prototype.sayName = function() {console.log("HAHAHAHAHAHAHAHAHA")}

const carl = new EighthGrader("carl")
carl.sayName()