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
  selectedItem;
  images: Object;
  i = 0;
  constructor(private _carouselService: CarouselImgService) { }

  ngOnInit() {
    // getting data from hero-imgs service
    this._carouselService.getImgs().subscribe(data => {
      this.images = data;
      this.selectedItem = data[0];
      let _this = this;

      let next = document.querySelector('.next');
      let previous = document.querySelector('.previous');

      function carousel() {
        _this.selectedItem = _this.images[_this.i];
        if (_this.i < (<any>_this.images).length - 1) {
          _this.i++;
        } else {
          _this.i = 0;
        }
      }
      let Carousel = setInterval(carousel, 3000);

      next.addEventListener('click', function test() {
        clearInterval(Carousel);
        if (_this.i < (<any>_this.images).length - 1) {
          _this.i++;
          _this.selectedItem = _this.images[_this.i]
        } else {
          _this.i = 0;
          _this.selectedItem = _this.images[_this.i]
        }
        Carousel = setInterval(carousel, 3000);
      });
  
  
      previous.addEventListener('click', function toto() {
        clearInterval(Carousel);
        if (_this.i > 0) {
          _this.i--;
          _this.selectedItem = _this.images[_this.i]
        } else {
          _this.i = (<any>_this.images).length - 1;
          _this.selectedItem = _this.images[_this.i]
        }
        Carousel = setInterval(carousel, 3000);
      });

      

    });
  }

  select(item, i){
    this.selectedItem = item;
    this.i = i;
  }
}
