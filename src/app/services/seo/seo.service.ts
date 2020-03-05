import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(@Inject(DOCUMENT) private dom) { }

  createCanonicalURL() {
		$('link[rel=canonical]').remove();
    let link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', this.dom.URL);
  }

  createDescription(descripcion: string){
    $( ".descri" ).remove();
    var desc = this.dom.createElement('meta');
    desc.setAttribute('name', 'description');
    desc.setAttribute('class', 'descri');
    desc.content = descripcion;
    this.dom.getElementsByTagName('head')[0].appendChild(desc);
  }

  createKeyWords(keywords: string){
    $( ".keys" ).remove();
    var keyword = this.dom.createElement('meta');
    keyword.setAttribute('name', 'keywords');
    keyword.setAttribute('class', 'keys');
    keyword.content = keywords;
    this.dom.getElementsByTagName('head')[0].appendChild(keyword);
  }

  createOpenGraph(tilePag: string, descripcion: string){
    $( ".twitter" ).remove();
    $( ".facebook" ).remove();

    //Open Graph Facebook
    let url = this.dom.createElement('meta');
    url.setAttribute('property', 'og:url');
    url.setAttribute('class', 'facebook');
    url.content = this.dom.location;
    this.dom.getElementsByTagName('head')[0].appendChild(url);

    let title = this.dom.createElement('meta');
    title.setAttribute('property', 'og:title');
    title.setAttribute('class', 'facebook');
    url.setAttribute('class', 'facebook');
    title.content = tilePag;
    this.dom.getElementsByTagName('head')[0].appendChild(title);

    let tipe = this.dom.createElement('meta');
    tipe.setAttribute('property', 'og:type');
    title.setAttribute('class', 'facebook');
    tipe.content = 'Sitio Web';
    this.dom.getElementsByTagName('head')[0].appendChild(tipe);

    let image = this.dom.createElement('meta');
    image.setAttribute('property', 'og:image');
    image.setAttribute('class', 'facebook');
    image.content = 'https://d3qfc4eeq75hwf.cloudfront.net/img/logo.png';
    this.dom.getElementsByTagName('head')[0].appendChild(image);

    let nameSite = this.dom.createElement('meta');
    nameSite.setAttribute('property', 'og:site_name');
    nameSite.setAttribute('class', 'facebook');
    nameSite.content = tilePag;
    this.dom.getElementsByTagName('head')[0].appendChild(nameSite);

    let desc = this.dom.createElement('meta');
    desc.setAttribute('property', 'og:description');
    desc.setAttribute('class', 'facebook');
    desc.content = descripcion;
    this.dom.getElementsByTagName('head')[0].appendChild(desc);

   //Open Graph Twitter
    let site = this.dom.createElement('meta');
    site.setAttribute('name', 'twitter:site');
    site.setAttribute('class', 'twitter');
    site.content = '@SeguroParaViaje';
    this.dom.getElementsByTagName('head')[0].appendChild(site);

    let creator = this.dom.createElement('meta');
    creator.setAttribute('name', 'twitter:creator');
    creator.setAttribute('class', 'twitter');
    creator.content = '@SeguroParaViaje';
    this.dom.getElementsByTagName('head')[0].appendChild(creator);

    let imgT = this.dom.createElement('meta');
    imgT.setAttribute('name', 'twitter:image');
    imgT.setAttribute('class', 'twitter');
    imgT.content = 'https://d3qfc4eeq75hwf.cloudfront.net/img/logo.png';
    this.dom.getElementsByTagName('head')[0].appendChild(imgT);

    let card = this.dom.createElement('meta');
    card.setAttribute('name', 'twitter:card');
    card.setAttribute('class', 'twitter');
    card.content = 'Sitio Web';
    this.dom.getElementsByTagName('head')[0].appendChild(card);

    let titleT = this.dom.createElement('meta');
    titleT.setAttribute('name', 'twitter:title');
    titleT.setAttribute('class', 'twitter');
    titleT.content = tilePag;
    this.dom.getElementsByTagName('head')[0].appendChild(titleT);

    let descT = this.dom.createElement('meta');
    descT.setAttribute('name', 'twitter:description');
    descT.setAttribute('class', 'twitter');
    descT.content = descripcion;
    this.dom.getElementsByTagName('head')[0].appendChild(descT);

    let urlT = this.dom.createElement('meta');
    urlT.setAttribute('name', 'twitter:domain');
    urlT.setAttribute('class', 'twitter');
    urlT.content = this.dom.location;
    this.dom.getElementsByTagName('head')[0].appendChild(urlT);
  }
}
