
import {
  Component, OnInit, ViewChild,
  ViewChildren, QueryList, AfterViewInit
} from '@angular/core';
import { Book } from './book';
import { BooksListComponent } from './books-list/books-list.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit {
  books: Book[] = [
    { id: 1, author: 'Sunil', name: 'AngularJS', price: 200, version: '1.6.7' },
    { id: 2, author: 'Datta', name: 'Angular2', price: 400, version: '2.0.0' },
    { id: 3, author: 'Suchitra', name: 'Angular Material', price: 600, version: '5.0.0' }];
  @ViewChild(BooksListComponent)
  bookListComponent: BooksListComponent;
  @ViewChildren(BooksListComponent)
  bookChildrenComponent: QueryList<BooksListComponent>;
  constructor() { }

  ngOnInit() {
    console.log(this.bookChildrenComponent);
    //this.bookListComponent.booksList = this.books;
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.bookListComponent.booksList = this.books, 0);
    this.bookChildrenComponent.forEach((bookComponent) => {
      setTimeout(()=>bookComponent.booksList = this.books,0);
    })
    // this.bookListComponent.booksList = this.books;
  }

  loadBooks() {
    this.bookListComponent.booksList = this.books;
    console.log(this.bookListComponent);
    console.log(this.bookChildrenComponent);
    this.bookChildrenComponent.forEach((bookComponent) => {
      bookComponent.booksList = this.books;
    })
  }

}
