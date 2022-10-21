import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { Book } from "../../types/Book";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"],
})
export class BookComponent implements OnInit {
  constructor(private cartService: CartService) {}

  @Input() book: Book = {} as Book;
  @Input() index: number = 0;
  @Output() emitBook = new EventEmitter<Book>();

  isInCart: boolean = false;

  // isInCart: boolean = this.cartService.cart.filter(
  //   (book) => book.name === this.book.name
  // )
  //   ? true
  // : false;

  addToCard() {
    // this.emitBook.emit(this.book);
    this.cartService.add(this.book);
    this.isInCart = true;
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

  ngOnInit(): void {}
}
