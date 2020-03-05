import { Component, OnInit } from '@angular/core';

import { ConnectionService } from '../../services/connection/connection.service';
import { AppComponent } from 'src/app/app.component';

interface SwiperOptions {};

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public usuarios: any;
  public dataAbout: any;

  configInfo: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    paginationHide: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 0,
    breakpoints: {
      // when window width is <= 425
      425: {
          slidesPerView: 1,
          slidesPerColumn: 1,
          noSwiping: false
      },
      // when window width is <= 600
      600: {
          slidesPerView: 2,
          slidesPerColumn: 1,
          noSwiping: false
      },
      // when window width is <= 999px
      999: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        noSwiping: false
    }
    }
  };

  constructor(private service: ConnectionService, public dataWeb: AppComponent) {
    this.dataAbout = dataWeb.getPages().home.about;
    service.getUserService().subscribe((data: any) =>{
      this.usuarios = data;
    })
  }

  ngOnInit() {
  }

}
