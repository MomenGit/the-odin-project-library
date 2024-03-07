const myLibrary = [new Book('The Hobbit', 'J.R.R', 300, true)];
const booksContainer = document.getElementsByClassName('books-container')[0];

function Book(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(new Book());
}

function displayBooks() {
  myLibrary.forEach((book) => {
    booksContainer.appendChild(BookCard(book));
  });
}

function BookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.className = 'book-card';
  bookCard.innerHTML = `<span class="name">${book.title}</span>
			<span class="author-name">${book.author}</span>
			<span class="number-of-pages">Pages: ${book.numberOfPages}</span>
			<div class="read-check-container">
				<input type="checkbox" name="isRead" id="read-check">
				<label for="read-check">Read</label>
			</div>`;
  return bookCard;
}

displayBooks();
