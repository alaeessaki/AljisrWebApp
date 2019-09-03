import { Component, OnInit,ViewEncapsulation } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-mot-de-president',
  templateUrl: './mot-de-president.component.html',
  styleUrls: ['./mot-de-president.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MotDePresidentComponent implements OnInit {
  slogons = [
    "Nous plaçons la préscolarisation au coeur de l'éducation et de la protection de la petite enfance",
    "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!",
    "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!"
  ];
  selectedItem;
  i = 0;
  constructor() { }

  ngOnInit() {

    // init the first slogon
    this.selectedItem = this.slogons[0];

    let slogonssection = document.querySelector('.hero-flag');
    let _this = this;

    // the loop function that change the slogon
    function loopInSlogons() {
      _this.change(_this.slogons[_this.i]);
      _this.i++;
      if (_this.i == _this.slogons.length) {
        _this.i = 0
      }
    }

    // init the loop interval so that will work in one of the two cases
    let slogonsCarousel = setInterval(loopInSlogons, 2000);

    // stoping the carousel
    slogonssection.addEventListener('mouseenter', function test() {
      clearInterval(slogonsCarousel);
    });

    // the actual loop
    slogonssection.addEventListener('mouseleave', function toto() {
      slogonsCarousel = setInterval(loopInSlogons, 2000);
    });

    $('img').on("load", function () {
      $(".loading-screen-wrapper").fadeOut("slow") }
    );
  }

  // the change function that change to selected slogan 
  change(slogon) {
    this.selectedItem = slogon;
  }


}
