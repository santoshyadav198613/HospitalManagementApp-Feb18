import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PostInterceptorService } from '../services/posts/post-interceptor.service';
import { PostsComponent } from './posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostEditComponent } from '../post-edit/post-edit.component';
import { AuthGuard } from '../services/guards/auth.guard';
import { PostResolveGuard } from '../services/posts/post-resolve.guard';
import { PostsService } from '../services/posts/posts.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'posts', component: PostsComponent,
        canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        resolve: {
          postsList: PostResolveGuard
        },
        children: [
          { path: ':id', component: PostsDetailsComponent },
          { path: ':id/edit/:userid', component: PostEditComponent }
        ]
      }
      // { path: 'posts/:id', component: PostsDetailsComponent }
    ])
  ],
  declarations: [PostsComponent, PostsDetailsComponent, PostsListComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PostInterceptorService, multi: true },
    PostResolveGuard,
    { provide: PostsService, useClass: PostsService }
  ]
})
export class PostsModule { }
