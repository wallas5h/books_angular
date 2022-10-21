import { Component, OnInit } from "@angular/core";
import { Book } from "../types/Book";
import { BooksService } from "./books.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  addToCart(book: Book) {
    this.cart.push(book);
    console.log(book);
  }
  isShowing: boolean = true;
  cart: Book[] = [];

  myName: string = "";

  isDisabled: boolean = false;

  toggleBooks() {
    this.isShowing = !this.isShowing;
  }
  handleClick() {
    console.log("działa");
    this.isDisabled = !this.isDisabled;
  }

  // przy evencie [(ngModule)] ponizszy kod nie jest potrzebny
  handleInput(e: any) {
    console.log(e.target.value);
    this.myName = e.target.value;
  }
}
