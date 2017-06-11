import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
