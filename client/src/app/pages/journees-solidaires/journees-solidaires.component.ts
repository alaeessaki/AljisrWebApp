import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';


@Component({
  selector: 'app-journees-solidaires',
  templateUrl: './journees-solidaires.component.html',
  styleUrls: ['./journees-solidaires.component.scss']
})
export class JourneesSolidairesComponent implements OnInit {

  constructor() { }
  selectedImage;
  i = 0;

  slogons = [
    "Nous plaçons la préscolarisation au coeur de l'éducation et de la protection de la petite enfance",
    "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!",
    "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!"
  ];

  images = [
    '../../../assets/journée-solidaire/image1.png',
    '../../../assets/journée-solidaire/image2.jpg'
    
  ]
  ngOnInit() {
    $('img').on("load", function () {
      $(".loading-screen-wrapper").fadeOut("slow")
    }
    );

    this.selectedImage = this.images[this.i];

    let _this = this;

    let next = document.querySelector('.next');
    let previous = document.querySelector('.previous');

    function carousel() {
      _this.selectedImage = _this.images[_this.i];
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
        _this.selectedImage = _this.images[_this.i]
      } else {
        _this.i = 0;
        _this.selectedImage = _this.images[_this.i]
      }
      Carousel = setInterval(carousel, 3000);
    });


    previous.addEventListener('click', function toto() {
      clearInterval(Carousel);
      if (_this.i > 0) {
        _this.i--;
        _this.selectedImage = _this.images[_this.i]
      } else {
        _this.i = (<any>_this.images).length - 1;
        _this.selectedImage = _this.images[_this.i]
      }
      Carousel = setInterval(carousel, 3000);
    });
  }

}
