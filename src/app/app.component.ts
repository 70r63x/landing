import { Component } from '@angular/core';

import dataWebES from '../assets/data/dataESP.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing';


  getHeader(){
  	return dataWebES.header;
  }
}
