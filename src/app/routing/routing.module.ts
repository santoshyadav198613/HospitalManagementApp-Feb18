import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { DepartmentComponent } from '../department/department.component';
import { EmployeeComponent } from '../employee/employee.component';
import { OrderComponent } from '../order/order.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: 'login', component: LoginComponent },
        { path: 'book', component: BooksComponent },
        { path: 'department', component: DepartmentComponent },
        { path: 'employee', component: EmployeeComponent },
        { path: 'order', component: OrderComponent },
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: '**', component: PagenotfoundComponent }
      ]
    )
  ],
  declarations: []
})
export class RoutingModule { }
