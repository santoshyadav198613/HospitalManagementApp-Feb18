import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';
import { Posts } from '../../services/posts/posts';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postsList: Posts[];

  constructor(private postService: PostsService) { }

  ngOnInit() {

    this.postService.getPosts().subscribe((res) => {
      this.postsList = res;
    },
      (error) => {
        console.log(error)
      });
  }

}
