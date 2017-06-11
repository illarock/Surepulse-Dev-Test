import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { TodosComponent } from './components/todos/todos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { routing } from './app.routing';
import { Ng2PaginationModule } from 'ng2-pagination';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
