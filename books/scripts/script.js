const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
  
    this.info = function () {
      return `${title} by ${author}, ${pages} pages, ${read}`;
    }
  }


function addBookToLibrary (title, author, pages, read) {
    book = new Book(title, author, pages, read);
    myLibrary.push(book);
}


function displayLibrary (Library) {
    for (book in Library) {
        const container = document.querySelector("container");

        const div = document.createElement("div");
        div.classList.add("book");

        const title = document.createElement("p");
        title.innerHTML = book.title;
        title.classList.add("title");
        div.appendChild(title);

        const author = document.createElement("p");
        author.innerHTML = book.author;
        author.classList.add("author");
        div.appendChild(author);

        const pages = document.createElement("p");
        pages.innerHTML = book.pages;
        pages.classList.add("pages");
        div.appendChild(pages);

        const read = document.createElement("p");
        read.innerHTML = book.read;
        read.classList.add("read");
        div.appendChild(read);


        document.getElementById("container").appendChild(div);
    }
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 304, true);
displayLibrary(myLibrary);