import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PostInterceptorService } from '../services/posts/post-interceptor.service';
import { PostsComponent } from './posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AuthGuard } from '../services/guards/auth.guard';
import { PostResolveGuard } from '../services/posts/post-resolve.guard';
import { PostsService } from '../services/posts/posts.service';
import { PostEditComponent } from './post-edit/post-edit.component';
import { postFactory } from '../services/posts/post-service.factory';
import { LoginService } from '../login/service/login.service';
import { VALUE_PROVIDER } from '../services/valueProvider/valueProvider';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: PostsComponent,
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
  declarations: [PostsComponent,
    PostsDetailsComponent,
    PostsListComponent,
    PostEditComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PostInterceptorService, multi: true },
    PostResolveGuard,
    // { provide: PostsService, useClass: PostsService }
    {
      provide: PostsService, useFactory: postFactory,
      deps: [LoginService, HttpClient, VALUE_PROVIDER]}
  ]
})
export class PostsModule { }
