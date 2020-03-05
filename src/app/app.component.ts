import { Component } from '@angular/core';

import dataWebES from '../assets/data/dataESP.json';
import dataSeoES from '../assets/data/seo.json';

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

  getFooter(){
  	return dataWebES.footer;
  }

  getForms(){
    return dataWebES.forms;
  }

  getSeo(){
    return dataSeoES;
  }

  getPages(){
    return dataWebES.pages;
  }
}
