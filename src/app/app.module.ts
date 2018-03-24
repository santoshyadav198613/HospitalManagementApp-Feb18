import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';

import { EmployeeService } from './services/employee/employee.service';
import { NewemployeeService } from './services/employee/newemployee.service';
import { PostsComponent } from './posts/posts.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    EmployeeListComponent,
    BooksComponent,
    BooksListComponent,
    PostsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // EmployeeService,
   {provide : EmployeeService , useClass :NewemployeeService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
