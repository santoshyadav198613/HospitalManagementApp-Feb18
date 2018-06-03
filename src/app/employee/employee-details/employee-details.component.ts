import { Component, OnInit } from '@angular/core';
import { Employee } from '../../services/employee/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee = new Employee();
  message: string;
  constructor(private route: ActivatedRoute,
    private empService: EmployeeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (data) => {
        let empId = + data.get('id');
        this.empService.getEmployeeDetails(empId).subscribe(
          (data) => {
            this.employee = data;
            this.employee.dob = new Date(data.dob);
          }
        )
      }
    )
  }


  update() {
    this.empService.updateEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.message = 'Record updated successfully';
      },
      (err) => {
        console.log(err)
        this.message = err;
      }
    )
  }
}
