import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';
import { Book } from 'src/app/interface/book';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})

export class BookItemComponent implements OnInit {
  @Input() bookItem: any;
  // bookList: Book[]

  constructor(
    private bookService: BookService,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  deleteBook(id) {
    return this.bookService.deleteBook(id).subscribe({
      next: data => {
        // this.dialog.open('Deleted SuccessFully')
        this.snackBar.open('Deleted SuccessFully','Close',{duration : 3000});
        window.location.reload()

      },
      error: err => {
        console.log(err)
      }
    })
  }

  // // getBookList() {
  // //   this.bookService.getBooklist().subscribe({
  // //     next: data => {
  // //       this.bookList = data
  // //     },
  // //     error: err => {
  // //       console.log(err)
  // //     }
  // //   })
  // }




}
