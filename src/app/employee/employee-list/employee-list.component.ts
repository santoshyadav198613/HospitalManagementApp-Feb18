import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',  
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges {
  @Input() employeeList: Employee[];
  @Input() title: string;
  @Output() selectedEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


  ngOnInit() {
  }

  selectEmployee(emp: Employee) {
    this.selectedEmployee.emit(emp);
  }

}
