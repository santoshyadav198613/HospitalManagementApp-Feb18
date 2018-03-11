import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  addPost() {
    let post: Posts = { title: 'Test', body: 'Test Body', userId: 3 };
    return this.http.post<Posts>('https://jsonplaceholder.typicode.com/posts', post);
  }

  updatePost() {
    let post: Posts = { id: 2, userId: 1, body: 'Test Update', title: 'Test Update' };
    return this.http.put('https://jsonplaceholder.typicode.com/posts/2', post);
  }

}
