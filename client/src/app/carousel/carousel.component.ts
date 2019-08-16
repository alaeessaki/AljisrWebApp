import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { HomePageService } from '../pages/home-page/home-page.service';

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
  
  images:Array<Object>;

  constructor(private _homePage : HomePageService) { }

  ngOnInit() {
    // getting data from hero-imgs service
    this._homePage.getdata().subscribe(data=>{
      this.images = data[0].imgs
    });
  }

  
}
