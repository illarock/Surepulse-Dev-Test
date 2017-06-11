import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../../service/jsondata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  appState: string;
  currentUser: string;
  users: any;
  constructor(private _jdService: JsondataService ) {
  }

  ngOnInit() {
    this._jdService.getData('users')
      .subscribe(res =>{
        this.users = res;
      });
  }

  changeState(state, key = null) {
  	if(key){
  		this.currentUser = key;
  	}
  	this.appState = state
  }

}
