const libraryTableBody = document.querySelector('tbody');
let myLibrary = [];

// Placeholder books
const book1 = new Book("The Way of Kings", "Brandon Sanderson", "500", "read");
const book2 = new Book("Dune", "Frank Herbert", "354", "read");
const book3 = new Book("Eragon", "Christopher Paolini", "1000", "not read");
const book4 = new Book("The Lightning Thief", "Rick Riordan", "400", "read");
const book5 = new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", "423", "not read");
const book6 = new Book("Words of Radiance", "Brandon Sanderson", "700", "read");
const book7 = new Book("Oathbreaker", "Brandon Sanderson", "723", "read");
const book8 = new Book("Eldest", "Christopher Paolini", "950", "not read");
const book9 = new Book("The Last Olympian", "Rick Riordan", "500", "read");
const book10 = new Book("Harry Potter and the Order of the Phoenix", "J. K. Rowling", "760", "not read");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
addBookToLibrary(book7);
addBookToLibrary(book8);
addBookToLibrary(book9);
addBookToLibrary(book10);
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