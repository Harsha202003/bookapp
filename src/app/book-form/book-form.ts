import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bookservices } from '../../Services/bookservices';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss',
})
export class BookForm {

  newBook = {

    title: '',
    author: '',
    description: '',
    price: '',
    published_date: '',
  };
  bookForm: any;
  booklist: any;
  cdr: any;

  constructor(private ts: Bookservices, private router: Router) { }

  onSubmit() {
    const bookData = {
      title: this.bookForm.value.title,
      author: this.bookForm.value.author,
      price: this.bookForm.value.price
    };

    this.ts.addBook(bookData).subscribe(() => {
      this.loadBooks();
    });
  }

  loadBooks() {
    this.ts.getbooks().subscribe((data) => {
      this.booklist = data;
      console.log(this.booklist);
      this.cdr.detectChanges();
    });
  }

  closeform() {
    this.router.navigate(['/booklist']);

  }


}
