import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PostsService } from './posts.service';
import { LoginService } from '../../login/service/login.service';

export function postFactory(loginService: LoginService,
    http: HttpClient,
    environment: any) {
    return new PostsService(loginService.isLoggedIn,
         http, environment);
}

