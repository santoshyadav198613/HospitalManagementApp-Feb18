import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';

import { EmployeeService } from './services/employee/employee.service';
import { NewemployeeService } from './services/employee/newemployee.service';
import { OrderComponent } from './order/order.component';

import { APP_PROVIDER, AppConfig } from './services/valueProvider/appProvider';

import { VALUE_PROVIDER } from './services/valueProvider/valueProvider';
import { environment } from '../environments/environment';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostsModule } from './posts/posts.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/service/login.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    EmployeeListComponent,
    BooksComponent,
    BooksListComponent,
    OrderComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PostsModule,
    RoutingModule
  ],
  providers: [
    // EmployeeService,
    { provide: EmployeeService, useClass: NewemployeeService },
    { provide: VALUE_PROVIDER, useValue: environment },
    { provide: APP_PROVIDER, useValue: AppConfig }, 
    LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
