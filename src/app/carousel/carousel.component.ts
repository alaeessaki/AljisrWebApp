import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { images } from '../declarations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { HeroImgsService } from './hero-imgs.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: true } }
  ]
})
export class CarouselComponent implements OnInit {
  images:Array<any>
  constructor(private _heroImgs : HeroImgsService) { }

  ngOnInit() {
    this.images = this._heroImgs.getImages();
  }

  
}
