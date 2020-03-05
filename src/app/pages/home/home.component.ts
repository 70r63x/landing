import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SeoService } from 'src/app/services/seo/seo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo: string = this.dataWeb.getSeo().home.titulo;
  public descripcion: string = this.dataWeb.getSeo().home.descripcion;
  public keysWords: string = this.dataWeb.getSeo().home.keysword;

  public dataHome: any;

  constructor(public dataWeb: AppComponent, private seo: SeoService, private titleService: Title) {
    titleService.setTitle(this.titulo);
    this.dataHome = dataWeb.getPages().home;
  }

  ngOnInit() {
    this.seo.createCanonicalURL();
    this.seo.createDescription(this.descripcion);
    this.seo.createOpenGraph(this.titulo, this.descripcion);
    this.seo.createKeyWords(this.keysWords);
  }

}
