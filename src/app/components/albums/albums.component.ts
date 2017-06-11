import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../../service/jsondata.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {

  albums: any;
  constructor(private _jdService: JsondataService ) {
  }

  ngOnInit() {
    this._jdService.getData('albums')
      .subscribe(res =>{
        this.albums = res;
      });
  }

}
