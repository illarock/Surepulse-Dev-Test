import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../../service/jsondata.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnInit {

  photos: any;
  constructor(private _jdService: JsondataService ) {
  }

  ngOnInit() {
    this._jdService.getData('photos')
      .subscribe(res =>{
        this.photos = res;
      });
  }


}
