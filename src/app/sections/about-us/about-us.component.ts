import { Component, OnInit } from '@angular/core';

import { ConnectionService } from '../../services/connection/connection.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public usuarios: any;

  constructor(private service: ConnectionService) {
    service.getUserService().subscribe((data: any) =>{
      console.log(data);
      this.usuarios = data;
    })
  }

  ngOnInit() {
  }

}
