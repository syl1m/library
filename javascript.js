let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Placeholder books
const book1 = new Book("The Way of Kings", "Brandon Sanderson", "500", "read");
addBookToLibrary(book1);

const book2 = new Book("Dune", "Frank Herbert", "354", "read");
addBookToLibrary(book2);

const book3 = new Book("Eragon", "Christopher Paolini", "1000", "not read");
addBookToLibrary(book3);