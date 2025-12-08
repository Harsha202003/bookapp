import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Bookservices } from '../../Services/bookservices';
import { HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList {
  booklist:any[]=[];
  newBook = {
    // id:'',
  title: '',
  author: '',
  description: '',
  price:'',
  published_date:'',  
};

  constructor(private ts: Bookservices ,private router:Router , private cdr: ChangeDetectorRef  ) {}

  ngOnInit() {
   this.getbooks()
   
  }

  getbooks(){
     this.ts.getbooks().subscribe((data) => {
      this.booklist = data; 
      
      console.log(this.booklist);
      this.cdr.detectChanges();  
    },
     (error)=>{
      console.log('error')
    });

  }
editBook(id: any) {
  this.router.navigate(['/edit',id]);
}


  deletebook(id:any){
    this.ts.deletebook(id).subscribe(
      (res)=>{
        this.getbooks()

      }

    )
  }

  addbook(){
    this.router.navigate(['/bookforms']);
  }

  viewBook(id: string) {
  this.router.navigate(['/bookdetail', id]);
}


}
