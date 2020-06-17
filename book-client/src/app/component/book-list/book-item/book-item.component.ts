import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../../../../app/service/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})

export class BookItemComponent implements OnInit {
  @Input() bookItem: any;

  constructor(
    private bookService: BookService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

  }

  deleteBook(id) {
    return this.bookService.deleteBook(id).subscribe({
      next: data => {
        this.snackBar.open('Deleted SuccessFully', 'Close', { duration: 3000 });
        window.location.reload()

      },
      error: err => {
        this.snackBar.open('Error', "Close", { duration: 3000 })
      }
    })
  }

}





