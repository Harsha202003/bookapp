import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import { BookList } from "./book-list/book-list";
import { HttpClient } from '@angular/common/http';
import { Bookservices } from '../Services/bookservices';
import { BookForm } from "./book-form/book-form";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, RouterLink, BookList, BookForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Book_Management');
}
