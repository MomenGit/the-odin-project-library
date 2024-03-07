const myLibrary = [];

function Book(title, author, isRead) {
  this.title = title;
  this.author = author;
  this.isRead = isRead;
}

function addBookToLibrary() {
  myLibrary.push(new Book());
}

function displayBooks() {
  myLibrary.forEach((book) => {});
}
