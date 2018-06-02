import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
  empList: Employee[] = [];
  constructor(private http: HttpClient) {
    console.log('This is employee service');
  }

  getEmployeeList() {
    return this.http.get<Employee[]>('http://localhost:3000/api/employee');
  }

  addEmployee(employee: Employee) {
    return this.http.post('http://localhost:3000/api/employee', employee);
  }

  getEmployeeDetails(id: number) {
    return this.http.get<Employee>('http://localhost:3000/api/employee/' + id);
  }
}
