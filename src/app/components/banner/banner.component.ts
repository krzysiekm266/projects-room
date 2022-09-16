import { CarouselService } from './../../services/carousel.service';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [NgbCarouselConfig]
})
export class BannerComponent implements OnInit {

  images:string[] = [];
  headers:string[] = [];
  captions:string[] = [];
  colors:string[] = [];
  constructor(private config: NgbCarouselConfig,private _carouselService:CarouselService) {
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.pauseOnFocus = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this._carouselService.getConfigCarousel().subscribe(crConfig => {
      crConfig.forEach( conf => {
        this.images.push(`url(`+`assets/img/projects/${conf.image}.png`+`)`);
        this.headers.push(conf.header);
        this.captions.push(conf.caption);
        this.colors.push(conf.bgColor);
      });
    });
    // this._carouselService.getImages().subscribe( img => this.images = img);
    // this.images = this.images.map(img => `url(`+`assets/img/projects/${img}.png`+`)`);
    // this._carouselService.getHeaders().subscribe(headers => this.headers = headers);
    // this._carouselService.getCaptions().subscribe(captions => this.captions = captions);
  }

}
