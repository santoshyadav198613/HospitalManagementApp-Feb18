import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
