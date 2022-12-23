const libraryTableBody = document.querySelector('tbody');
const modalBackdrop = document.querySelector('.modal_backdrop');

const bookForm = document.querySelector('.add_book_form');
const titleFormInput = document.querySelector('input[name="title"]');
const authorFormInput = document.querySelector('input[name="author"]');
const pagesFormInput = document.querySelector('input[name="pages"]');
const readFormInput = document.querySelector('input[name="read"]');

const addBookBtn = document.querySelector('.add_book button');
const cancelBtn = document.querySelector('button[type="reset"]');
const submitBtn = document.querySelector('button[type="submit"]');

let removeBookIcon = document.querySelectorAll('.remove_icon');
let myLibrary = [];

// Placeholder books
const book1 = new Book("The Way of Kings", "Brandon Sanderson", "500", "Read");
const book2 = new Book("Dune", "Frank Herbert", "354", "Read");
const book3 = new Book("Eragon", "Christopher Paolini", "1000", "Not Read");
const book4 = new Book("The Lightning Thief", "Rick Riordan", "400", "Read");
const book5 = new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", "423", "Not Read");
const book6 = new Book("Words of Radiance", "Brandon Sanderson", "700", "Read");
const book7 = new Book("Oathbreaker", "Brandon Sanderson", "723", "Read");
const book8 = new Book("Eldest", "Christopher Paolini", "950", "Not Read");
const book9 = new Book("The Last Olympian", "Rick Riordan", "500", "Read");
const book10 = new Book("Harry Potter and the Order of the Phoenix", "J. K. Rowling", "760", "Not Read");

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

// Event Listeners
addBookBtn.addEventListener('click', () => {
    bookForm.style.display = "flex";
    modalBackdrop.style.display = "block";
});

cancelBtn.addEventListener('click', () => {
    bookForm.style.display = "none";
    modalBackdrop.style.display = "none";
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    checkFormValidity();

    const titleFormValue = titleFormInput.value;
    const authorFormValue = authorFormInput.value;
    const pagesFormValue = pagesFormInput.value;
    const readFormValue = readFormInput.checked;
    
    if (titleFormValue && authorFormValue && pagesFormValue) {
        bookForm.style.display = "none";
        modalBackdrop.style.display = "none";
        const readStatus = getReadStatus(readFormValue);
        const newBook = new Book(titleFormValue, authorFormValue, pagesFormValue, readStatus);
        addBookToLibrary(newBook);
        clearForm();
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
    clearBookTable();
    displayBook();
}

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookRow = document.createElement('tr');
        bookRow.dataset.index = i;
        for(let prop in myLibrary[i]) {
            const bookInfoCell = document.createElement('td');
            bookInfoCell.textContent = `${myLibrary[i][prop]}`;
            bookInfoCell.dataset.index = i;
            bookRow.appendChild(bookInfoCell);
        }
        addRemoveIconToRow(bookRow, i);
        libraryTableBody.appendChild(bookRow);

        const readStatusCell = bookRow.querySelectorAll('td')[3];
        const readStatusBtn = createStatusBtn(readStatusCell, i);
        setReadStatusColor(readStatusBtn);
    }
    setRemoveIconEventListener();
}

function clearForm() {
    titleFormInput.value = '';
    authorFormInput.value = '';
    pagesFormInput.value = '';
    readFormInput.checked = true;
}

function getReadStatus(readFormValue) {
    if (readFormValue == true) {
        return ('Read');
    } else {
        return ('Not Read');
    }
}

function checkFormValidity() {
    pagesFormInput.reportValidity();
    authorFormInput.reportValidity();
    titleFormInput.reportValidity();
}

function setReadStatusColor(btn) {
    if (btn.textContent == "Read") {
        btn.style.backgroundColor = "var(--green)";
    } else {
        btn.style.backgroundColor = "var(--red)";
    }
}

function addRemoveIconToRow(bookRow, index) {
    const removeIconCell = document.createElement('td');
    const removeIcon = document.createElement('img');
    removeIconCell.classList.add('remove_icon_cell');
    removeIcon.classList.add('remove_icon');
    removeIcon.src = "./images/remove_icon.svg";
    removeIconCell.appendChild(removeIcon);
    bookRow.appendChild(removeIconCell);

    removeIconCell.dataset.index = index;
    removeIcon.dataset.index = index;
}

function clearBookTable() {
    libraryTableBody.textContent = "";
}

function removeBook(e) {
    const index = e.target.dataset.index;
    myLibrary.splice(index,1);
    clearBookTable();
    displayBook();
}

function setRemoveIconEventListener() {
    removeBookIcon = document.querySelectorAll('.remove_icon');
    removeBookIcon.forEach(icon => icon.addEventListener('click', removeBook));
}

function createStatusBtn(readStatusCell, index) {
    const readStatusValue = readStatusCell.textContent;
    const readStatusBtn = document.createElement('button');
    readStatusBtn.classList.add('readStatusBtn');
    readStatusBtn.textContent = readStatusValue;
    readStatusBtn.dataset.index = index;
    readStatusCell.textContent = '';
    readStatusCell.appendChild(readStatusBtn);

    return readStatusBtn;
}