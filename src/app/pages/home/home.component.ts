import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SeoService } from 'src/app/services/seo/seo.service';
import { Title } from '@angular/platform-browser';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

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

  constructor(public dataWeb: AppComponent, private seo: SeoService, private titleService: Title, public dialog: MatDialog) {
    titleService.setTitle(this.titulo);
    this.dataHome = dataWeb.getPages().home;
  }

  ngOnInit() {
    this.seo.createCanonicalURL();
    this.seo.createDescription(this.descripcion);
    this.seo.createOpenGraph(this.titulo, this.descripcion);
    this.seo.createKeyWords(this.keysWords);
  }

  openVideo(){
    this.dialog.open(Openvideo);
  }

}

@Component({//open video****
  selector: 'video',
  templateUrl: 'video.html'
})

export class Openvideo {

  public video: any = "https://www.youtube.com/embed/Ni-SmyFkaGE";

  constructor(public dialogRef: MatDialogRef<Openvideo>, @Inject(MAT_DIALOG_DATA) public data: any){
    console.log("abri video");
  }


}
