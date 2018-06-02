import { Component, OnInit, DoCheck } from '@angular/core';

import { Employee } from '../services/employee/employee';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, DoCheck {
  title = 'Employee List';
  visible = false;
  role = 'User';
  emp: Employee = new Employee();
  selectedEmployee: Employee;
  employee: Employee[] = [];
  // employeeSevice: EmployeeService;
  constructor(private empService: EmployeeService) {
    // this.employeeSevice = empService;
  }

  ngOnInit() {
    this.loadEmployee();
  }

  ngDoCheck(): void {
    console.log('do check is called');
  }

  loadEmployee() {
    this.empService.getEmployeeList().subscribe((data) => this.employee = data);
  }

  addEmployee() {
    this.empService.addEmployee(this.emp).subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    )
  }

  toggle(): void {
    this.visible = !this.visible;
    this.title = 'New Employee List';
  }

  receiveFromParent(emp: Employee) {
    this.selectedEmployee = emp;
  }
}
