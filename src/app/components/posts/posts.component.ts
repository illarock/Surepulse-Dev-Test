import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../../service/jsondata.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private _jdService: JsondataService ) {
  }

  ngOnInit() {
    this._jdService.getData('posts')
      .subscribe(res =>{
        this.posts = res;
      });
  }


}
