import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './component/book-list/book-list.component';
import { BookComponent } from './component/book/book.component';
import { UpdateBookComponent } from './component/update-book/update-book.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path : 'book',
    component: BookComponent
  },
  {
    path: 'book/:id',
    component: UpdateBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
