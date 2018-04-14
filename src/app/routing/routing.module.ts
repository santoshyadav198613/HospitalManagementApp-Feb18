import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { DepartmentComponent } from '../department/department.component';
import { EmployeeComponent } from '../employee/employee.component';
import { OrderComponent } from '../order/order.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../services/guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: 'login', component: LoginComponent },
        { path : 'posts', loadChildren : '../posts/posts.module#PostsModule' },
        { path: 'book', component: BooksComponent, canActivate: [AuthGuard] },
        { path: 'department', component: DepartmentComponent, canActivate: [AuthGuard] },
        { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
        { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: '**', component: PagenotfoundComponent }
      ]
    )
  ],
  declarations: []
})
export class RoutingModule { }
