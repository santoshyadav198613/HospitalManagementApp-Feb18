import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title: string = 'Employee';
  visible : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.visible = !this.visible;
  }

}
