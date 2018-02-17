import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title: string = 'Employee';
  visible: boolean = false;
  role: string = 'User';
  selectedEmployee: Employee;
  employee: Employee[] = [
    { id: 1, name: 'Test1', email: 'abc@gmail.com', salary: 12000 },
    { id: 2, name: 'Test2', email: 'abc@gmail.com', salary: 24000 },
    { id: 3, name: 'Test3', email: 'abc@gmail.com', salary: 48000 },
    { id: 4, name: 'Test4', email: 'abc@gmail.com', salary: 120000 }
  ]
  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.visible = !this.visible;
  }

  receiveFromParent(emp:Employee) {
     this.selectedEmployee = emp;
  }
}
