import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './service/user';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    if (this.loginService.login(this.user)) {
      //redirect User
      this.router.navigate(['employee']);
    }
    //show error 
  }
}
