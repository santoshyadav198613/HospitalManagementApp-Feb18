import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { DepartmentComponent } from '../department/department.component';
import { EmployeeComponent } from '../employee/employee.component';
import { PostsComponent } from '../posts/posts.component';
import { OrderComponent } from '../order/order.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: 'book', component: BooksComponent },
        { path: 'department', component: DepartmentComponent },
        { path: 'employee', component: EmployeeComponent },
        { path: 'posts', component: PostsComponent },
        { path: 'order', component: OrderComponent },
        { path: '', redirectTo: 'employee', pathMatch: 'full' },
        { path: '**' , component : PagenotfoundComponent }
      ]
    )
  ],
  declarations: []
})
export class RoutingModule { }
