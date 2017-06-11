import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../../service/jsondata.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {

  comments: any;
  constructor(private _jdService: JsondataService ) {
  }

  ngOnInit() {
    this._jdService.getData('comments')
      .subscribe(res =>{
        this.comments = res;
      });
  }

}
