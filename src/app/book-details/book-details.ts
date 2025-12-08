import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Bookservices } from '../../Services/bookservices';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './book-details.html',
  styleUrl: './book-details.scss',
})
export class BookDetails implements OnInit {
  books:any={};

  constructor(private ts:Bookservices ,private route: ActivatedRoute,private router: Router, 
    private cdr: ChangeDetectorRef  ){}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.ts.getBookById(id).subscribe(
      data => {
        this.books = data;
        this.cdr.detectChanges();
        if (this.books.published_date) {
          this.books.published_date = new Date(this.books.published_date);
        }
      },
      error => {
        console.log("Error fetching book details");
      }
    );

  }



  backtolist(){
    this.router.navigate(['/booklist']);
  }


}
