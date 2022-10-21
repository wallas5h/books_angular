import { Injectable } from "@angular/core";
import { Book } from "../types/Book";

@Injectable({
  providedIn: "root",
})
export class BooksService {
  books: Book[] = [
    {
      name: "Bagno",
      author: "Przemysław Piotrowski",
      src: "https://ecsmedia.pl/c/bagno-p-iext115547550.jpg",
      amount: 25,
    },
    {
      name: "Bagno",
      author: "Przemysław Piotrowski",
      src: "https://ecsmedia.pl/c/bagno-p-iext115547550.jpg",
      amount: 25,
    },
    {
      name: "Bagno",
      author: "Przemysław Piotrowski",
      src: "https://ecsmedia.pl/c/bagno-p-iext115547550.jpg",
      amount: 25,
    },
    {
      name: "Bagno",
      author: "Przemysław Piotrowski",
      src: "https://ecsmedia.pl/c/bagno-p-iext115547550.jpg",
      amount: 25,
    },
  ];

  constructor() {}

  getBooks(): Book[] {
    return this.books;
  }
}
