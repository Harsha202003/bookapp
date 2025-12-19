import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Bookservices {

  public jsonUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  getbooks(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

  deletebook(id: number) {
    return this.http.delete(this.jsonUrl + '/' + id)
  }

  addBook(bookData: any): Observable<any> {
    return this.http.post(this.jsonUrl, bookData);
  }


  updateBook(id: any, data: any) {
    return this.http.put(`${this.jsonUrl}/${id}`, data);
  }

  getBookById(id: any): Observable<any> {
    return this.http.get(`${this.jsonUrl}/${id}`);
  }

}
