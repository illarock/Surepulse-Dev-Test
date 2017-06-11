import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../../service/jsondata.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit {

  todos: any;
  constructor(private _jdService: JsondataService ) {
  }

  ngOnInit() {
    this._jdService.getData('todos')
      .subscribe(res =>{
        this.todos = res;
      });
  }
}
