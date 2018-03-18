import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts/posts.service';
import { Posts } from '../services/posts/posts';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [{ provide: PostsService, useClass: PostsService }]
})
export class PostsComponent implements OnInit {
  postsList: Posts[];
  post: Posts = new Posts();
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((res) => {
      this.postsList = res;
    },
      (error) => {
        console.log(error)
      });
  }

  addPost() {
    console.log(this.post);
    this.postService.addPost(this.post).subscribe((res) => {
      console.log(res);
       this.post = new Posts();
    },
      (err) => console.log(err))
  }

  updatePost() {
    this.postService.updatePost().subscribe((res) => console.log(res),
      (err) => console.log(err));
  }

  deletePost() {
    this.postService.deletePost().subscribe((res) => console.log(res));
  }

}