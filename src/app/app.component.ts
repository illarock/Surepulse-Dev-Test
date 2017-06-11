import { Component } from '@angular/core';
import {JsondataService} from './service/jsondata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JsondataService]
})
export class AppComponent {

}
