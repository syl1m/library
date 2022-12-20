const libraryTableBody = document.querySelector('tbody');

const bookForm = document.querySelector('.add_book_form');
const titleFormValue = document.querySelector('input[name="title"]').value;
const authorFormValue = document.querySelector('input[name="author"]').value;
const pagesFormValue = document.querySelector('input[name="pages"]').value;

const addBookBtn = document.querySelector('.add_book button');
const cancelBtn = document.querySelector('button[type="reset"]');
const submitBtn = document.querySelector('button[type="submit"]');

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

displayBook()

// Event Listeners
addBookBtn.addEventListener('click', () => {
    bookForm.style.display = "flex";
});

cancelBtn.addEventListener('click', () => {
    bookForm.style.display = "none";
});

submitBtn.addEventListener('click', () => {
    if (titleFormValue && authorFormValue && pagesFormValue) {
        bookForm.style.display = "none";
    }
});

// Functions
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