import { OnInit, Component } from '@angular/core';

import { EmployeeService } from './services/employee/employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : `<h1> 
  //       Root Component </h1>`,
  styleUrls: ['./app.component.css']
  // styles: [
  //    'background-color : red ' ]
})
export class AppComponent implements OnInit {
  title = 'Angular App';
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.getEmployeeList();
  }

  addEmployee() {
    this.empService.addEmployee();
  }
}
