import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class JsondataService {
  param: string;
  private JsonUrl: string;

  constructor( private _http: Http ) {

  }

  getData(param) {
    this.JsonUrl = 'https://jsonplaceholder.typicode.com/';
    return this._http.get(this.JsonUrl + param)
      .map(res => res.json());
  }
}
