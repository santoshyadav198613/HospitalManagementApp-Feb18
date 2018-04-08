import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PostInterceptorService } from '../services/posts/post-interceptor.service';
import { PostsComponent } from './posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'posts', component: PostsComponent },
      { path: 'posts/:id', component: PostsDetailsComponent }
    ])
  ],
  declarations: [PostsComponent, PostsDetailsComponent, PostsListComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PostInterceptorService, multi: true }
  ]
})
export class PostsModule { }
