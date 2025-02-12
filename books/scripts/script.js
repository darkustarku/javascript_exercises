const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.changeStatus = function () {
      if (this.read == true) {
        this.read = false;
      }
      else {
        this.read = true;
      }
    }
  
  
    this.info = function () {
      return `${title} by ${author}, ${pages} pages, ${read}`;
    }
  }

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

function addBookToLibrary (title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}


function displayLibrary (Library) {

    for (let i =0; i < Library.length; i++) {
        let book = Library[i];

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

        const read = document.createElement("span");
        read.innerHTML = book.read;
        read.classList.add("status");
        div.appendChild(read);


        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete Book";
        deleteButton.classList.add("delete-button");
        div.appendChild(deleteButton);

        div.dataset.index = i;

        const statusButton = document.createElement("button");
        statusButton.innerHTML = "Change Status";
        statusButton.classList.add("status-button");
        div.appendChild(statusButton);

        document.getElementsByClassName("container")[0].appendChild(div)

        deleteButton.addEventListener("click", (event) => {
          removeBook(event);
        });

        statusButton.addEventListener("click", (event) => {
          const div = event.target.parentNode;
          index = div.dataset.index;
          myLibrary[index].changeStatus();
          const status = myLibrary[index].read;
          const read = div.querySelector(".status");
          read.innerHTML = status;
        });

    }
}

function removeBook(event) {
  const div = event.target.parentNode;
  const container = div.parentNode;
  const index = div.dataset.index;
  for (let i = 0; i < myLibrary.length; i++) {
    if (i == index) {
      myLibrary.splice(index, 1);
      console.log(myLibrary);
  }
  div.remove();
  updateIDs(container);
}
}

function updateIDs (container) {
  if (container.children != null) {
    console.log(container.children)
    const books = container.children;
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      book.dataset.index = i;
    }
  }
}


const showButton = document.querySelector("#showdialog");
const dialog = document.querySelector("dialog");



showButton.addEventListener("click", () => {
  dialog.showModal();
});

const closeButton = document.querySelector("#close");
closeButton.addEventListener("click", () => {
  dialog.close();
});


dialog.addEventListener("submit", (e) => {
  e.preventDefault();

  const bookInfo = document.getElementById("bookform").elements;
  const bookName = bookInfo[0].value;
  const bookAuthor = bookInfo[1].value;
  const bookPages = bookInfo[2].value;
  let bookStatus;

  if (bookInfo[4] != undefined) {
    bookStatus = "read";
  }
  else {
    bookStatus = "not read";
  }

  addBookToLibrary(bookName, bookAuthor, bookPages, bookStatus);

  clearContainer();
  displayLibrary(myLibrary);

  dialog.close();
  resetForm();
});

function resetForm() {
  const form = document.getElementById("bookform");
  form.reset();
}

function clearContainer () {
  const container = document.getElementById("book-container");
  container.innerHTML = "";
}





