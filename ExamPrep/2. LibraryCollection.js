class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }
  addBook(bookName, bookAuthor) {
    if (this.books.length >= this.capacity) {
      throw new Error(`Not enough space in the collection.`);
    }
    this.books.push({ bookName, bookAuthor, payed: false });
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }
  payBook(bookName) {
    let foundBook = this.books.find((book) => book[`bookName`] === bookName);
    if (!foundBook) {
      throw new Error(`${bookName} is not in the collection.`);
    }
    if (foundBook.payed === true) {
      throw new Error(`${bookName} has already been paid.`);
    }
    foundBook.payed = true;
    return `${bookName} has been successfully paid.`;
  }
  removeBook(bookName) {
    let index = 0;
    let foundBook = this.books.find((book, i) => {
      index = i;
      return book[`bookName`] === bookName;
    });
    if (!foundBook) {
      throw new Error(`The book, you're looking for, is not found.`);
    }
    if (foundBook.payed === false) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }
    this.books.splice(index, 1);
    return `${bookName} remove from the collection.`;
  }
  getStatistics(bookAuthor) {
    if (bookAuthor === undefined) {
      let result = `The book collection has ${
        this.capacity - this.books.length
      } empty spots left.`;
      this.books.forEach(
        (book) =>
          (result += `\n${book.bookName} == ${book.bookAuthor} - ${
            book.payed ? `Has Paid` : `Not Paid`
          }.`)
      );
      return result;
    }
    if (!this.books.find((book) => book[`bookAuthor`] === bookAuthor)) {
      throw new Error(`${bookAuthor} is not in the collection.`);
    }
    let result = "";
    this.books.forEach((book) => {
      if (book[`bookAuthor`] === bookAuthor) {
        result += `${book.bookName} == ${book.bookAuthor} - ${
          book.payed ? `Has Paid` : `Not Paid`
        }.`;
      }
    });
    return result;
  }
}
const library = new LibraryCollection(5);
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics());
