import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class LoginService {

  constructor() { }

  login(user: User) {
    if (user.userName === 'Admin' && user.password === 'Admin') {
        return true;
    }
    return false;
  }

}
