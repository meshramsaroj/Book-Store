import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../interface/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = "http://localhost:7000/books";


  constructor(
    private http: HttpClient
  ) { }

  getBooklist(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getBook(id: string): Observable<any> {
    return this.http.get(this.baseUrl + `/${id}`);
  }

  addBook(name, imageUrl, description, price): Observable<any> {
    return this.http.post(this.baseUrl, {
      name, imageUrl, description, price
    }, {
      responseType: "text"
    })
  }

  deleteBook(id): Observable<any> {
    const api = `${this.baseUrl}/${id}`
    const data =this.http.delete(api);
    return data;
  }

  updateBook(id, name, imageUrl, description, price): Observable<any> {
    const api = `${this.baseUrl}/${id}`
    return this.http.put(api,{name,imageUrl,description,price}, {
      responseType: "text"
    })

  }

}
