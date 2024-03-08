const myLibrary = [];
const booksContainer = document.getElementsByClassName('books-container')[0];
const addBookButton = document.getElementById('add-btn');
const submitBookButton = document.getElementById('submit-btn');
const dialog = document.querySelector('dialog');

function Book(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead ? true : false;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  booksContainer.appendChild(BookCard(book, myLibrary.length - 1));
}

function displayBooks() {
  myLibrary.forEach((book) => {
    booksContainer.appendChild(BookCard(book));
  });
}

function BookCard(book, index) {
  const bookCard = document.createElement('div');
  bookCard.className = 'book-card';
  bookCard.id = `card-${index}`;
  const removeBookButton = document.createElement('button');
  removeBookButton.className = 'remove-btn';
  removeBookButton.innerText = 'REMOVE';

  bookCard.innerHTML = `<span class="name">${book.title}</span>
			<span class="author-name">${book.author}</span>
			<span class="number-of-pages">Pages: ${book.numberOfPages}</span>
			<div class="read-check-container">
				<input type="checkbox" name="isRead" id="read-check${index}" value="${
    book.isRead
  }" ${book.isRead ? 'checked' : ''}>
				<label for="read-check${index}">Read</label>
			</div>`;
  removeBookButton.dataset.index = index;
  removeBookButton.addEventListener('click', (event) => {
    myLibrary.splice(parseInt(event.target.dataset.index), 1);
    booksContainer.removeChild(bookCard);
  });
  bookCard.appendChild(removeBookButton);
  return bookCard;
}

// "Show the dialog" button opens the dialog modally
addBookButton.addEventListener('click', () => {
  dialog.showModal();
});

submitBookButton.addEventListener('click', () => {
  const form = dialog.firstElementChild;
  const formData = new FormData(form);
  console.log(formData.get('isRead'));
  const book = new Book(
    formData.get('name'),
    formData.get('author'),
    formData.get('pages'),
    formData.get('isRead'),
  );
  addBookToLibrary(book);
  form.reset();
  dialog.close();
});

displayBooks();
