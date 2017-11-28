import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';

@Component ({
  selector: 'app-artists',
  templateUrl: './templates/artists2.component.html'

})
export class ArtistsTwoComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Through print, digital media, and work with local businesses, Fourteen76 showcases the intersectional talent and news hidden in the cracks of Birmingham and surrounding areas.`},
      {property: 'og:title', content: "Artists | Fourteen76"},
      {property: 'og:description', content: `Through print, digital media, and work with local businesses, Fourteen76 showcases the intersectional talent and news hidden in the cracks of Birmingham and surrounding areas.`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'fourteen76.jpg'}
      {property: 'og:site_name', content: 'Fourteen76'}
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: "Artists | Fourteen76"},
      {name: 'twitter:description', content: `Through print, digital media, and work with local businesses, Fourteen76 showcases the intersectional talent and news hidden in the cracks of Birmingham and surrounding areas.`},
      {name: 'twitter:image', content: global.shareImgUrl + 'fourteen76.jpg'}
    ]);
  }

  unactiveCircle = "none";
  activeCircle = "black";

  ngOnInit() {
    this.titleService.setTitle('Artists');
  }

}
