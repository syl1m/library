const libraryTableBody = document.querySelector('tbody');
let myLibrary = [];

// Placeholder books
const book1 = new Book("The Way of Kings", "Brandon Sanderson", "500", "read");
const book2 = new Book("Dune", "Frank Herbert", "354", "read");
const book3 = new Book("Eragon", "Christopher Paolini", "1000", "not read");
const book4 = new Book("The Lightning Thief", "Rick Riordan", "400", "read");
const book5 = new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", "423", "not read");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
// 

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookRow = document.createElement('tr');
        for(let prop in myLibrary[i]) {
            const bookInfoCell = document.createElement('td');
            bookInfoCell.textContent = `${myLibrary[i][prop]}`;
            bookRow.appendChild(bookInfoCell);
        }
        libraryTableBody.appendChild(bookRow);
    }
}

displayBook()