import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bookservices } from '../../Services/bookservices';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss',
})
export class BookForm {

newBook = {
  
  title: '',
  author: '',
  description: '',
  price:'',
  published_date:'',  
};

constructor(private ts:Bookservices , private router:Router){}
  
    saveBook() {
    this.ts.addBook(this.newBook).subscribe(() => {
      
      this.newBook = {title: '', author: '',published_date:'',description:'',price:'' };
      alert("Book Added Successfully!");
       this.router.navigate(['/booklist']);
    });
  }

  
  closeform(){
    this.router.navigate(['/booklist']);
    
  }


}
