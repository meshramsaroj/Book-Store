import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookForm = new FormGroup({
    name: new FormControl(''),
    imageUrl: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    // available: new FormControl('')

  })
  constructor(
    private bookService: BookService,

    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {


  }

  createBook() {
    console.log(this.bookForm.controls);
    this.bookService.addBook(
      this.bookForm.controls.name.value,
      this.bookForm.controls.imageUrl.value,
      this.bookForm.controls.description.value,
      this.bookForm.controls.price.value

    ).subscribe(data => {
      this.snackBar.open('Created Successfully', 'Close');

    })
  }

}
