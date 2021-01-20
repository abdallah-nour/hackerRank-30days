
class Book {
  constructor(title, author) {
    if (this.constructor === Book) {
      throw new TypeError('Do not attempt to directly instantiate an abstract class.');
    }
    else {
      this.title = title;
      this.author = author;
    }
  }

  display() {
    console.log('Implement the \'display\' method!')
  }
}

class MyBook extends Book {
  constructor(title, author, price) {
    super(title, author);
    this.price = price;
  }
  display() {
    console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}\n`);
  }
}

let book = new MyBook('this is title', 'this is author', 'this is price');
book.display();