import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList :Book[]

  constructor(
    private bookService : BookService
  ) { }

  ngOnInit(): void {
    this.getBooklist();
    // this.bookService.getHeader();
  }

  getBooklist() {
    this.bookService.getBooklist().subscribe(data =>{
      this.bookList = data;
    })

  }

}
