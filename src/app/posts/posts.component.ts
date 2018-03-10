import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [{ provide: PostsService, useClass: PostsService }]
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((res) => {
      console.log(res);
    },
      (error) => {
        console.log(error)
      });
  }
}
