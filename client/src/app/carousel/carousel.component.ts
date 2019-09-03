import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { CarouselImgService } from './carousel-img.service';


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
  
  images:Object;

  constructor(private _carouselService : CarouselImgService) { }

  ngOnInit() {
    // getting data from hero-imgs service
    this._carouselService.getImgs().subscribe(data=>{
      this.images = data
    });


  }

  
}
