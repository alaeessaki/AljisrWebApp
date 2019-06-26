import { Component, OnInit } from '@angular/core';
import { images } from '../declarations';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  ]
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Images: images[] = [
    {
      source: "../assets/hero2.jpg",
      alt: "A girl and a boy writing their notes in a paper"
    },
    // {
    //   source: "../assets/hero.jpg",
    //   alt: "The president of Aljisr reading his speachs"
    // },
    {
      source: "../assets/hero3.jpg",
      alt: "The president of Aljisr reading his speachs"
    },
    {
      source: "../assets/hero4.jpg",
      alt: "The president of Aljisr reading his speachs"
    },
    {
      source: "../assets/hero5.jpg",
      alt: "The president of Aljisr reading his speachs"
    },
    {
      source: "../assets/hero6.jpg",
      alt: "The president of Aljisr reading his speachs"
    }
  ];
}
