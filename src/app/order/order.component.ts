import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // name: FormControl;
  orderForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.name = new FormControl('test', []);
    this.orderForm = this.fb.group(
      {
        orderId: new FormControl('', [Validators.required, Validators.min(1)]),
        customerName: new FormControl('', [Validators.required, Validators.minLength(4)]),
        email: new FormControl(''),
        mobile: new FormControl(''),
        address: this.fb.group(
          {
            addressLine1: new FormControl(''),
            addressLine2: new FormControl(''),
            city: new FormControl(''),
            pin: new FormControl('')
          })
      });
  }

}
