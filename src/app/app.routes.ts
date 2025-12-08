import { Routes } from '@angular/router';
import { BookList } from './book-list/book-list';
import { BookForm } from './book-form/book-form';
import { BookDetails } from './book-details/book-details';

export const routes: Routes = [
    {path:'',redirectTo:'booklist',pathMatch:'full'},
    {path:"booklist",component:BookList},
    {path:'bookforms',component:BookForm},
    {path:'bookdetail/:id',component:BookDetails},
    {path:'edit/:id',component:BookForm}
];
