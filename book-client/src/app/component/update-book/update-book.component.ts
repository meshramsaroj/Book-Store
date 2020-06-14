import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from 'src/app/service/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookId;
  bookName;
  bookForm = new FormGroup({
    name: new FormControl(''),
    imageUrl: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  })
  constructor(
    private activatedRout: ActivatedRoute,
    private router : Router,
    private bookService: BookService,
    private snackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
    this.bookId = this.activatedRout.snapshot.params.id;

    this.getBookData();

  }

  getBookData() {
    this.bookService.getBook(this.bookId).subscribe({
      next: data => {
        this.bookForm.controls.name.setValue(data.name);
        this.bookForm.controls.imageUrl.setValue(data.imageUrl);
        this.bookForm.controls.description.setValue(data.description);
        this.bookForm.controls.price.setValue(data.price);
      },
      error: err => {
        console.log(err)
      }
    })
  }

  updateBook() {
    this.bookService.updateBook(
      this.bookId,
      this.bookForm.controls.name.value,
      this.bookForm.controls.imageUrl.value,
      this.bookForm.controls.description.value,
      this.bookForm.controls.price.value
    ).subscribe({
      next: data => {
        this.snackBar.open('Updated Successfully','Close',{duration : 2000});
        this.router.navigateByUrl('/')
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
