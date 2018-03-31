import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Posts } from './posts';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts',
      { headers: new HttpHeaders().set('authKey', 'fsdfjdgsf435345hjk').set('authpwd', 'fdsfdsf') });
  }

  addPost(post: Posts) {
    // let post: Posts = { title: 'Test', body: 'Test Body', userId: 3 };
    return this.http.post<Posts>('https://jsonplaceholder.typicode.com/posts', post);
  }

  updatePost() {
    let post: Posts = { id: 2, userId: 1, body: 'Test Update', title: 'Test Update' };
    return this.http.put('https://jsonplaceholder.typicode.com/posts/2', post);
  }

  deletePost() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/2');
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos',
     { reportProgress: true });
    return this.http.request(request);
  }

}
