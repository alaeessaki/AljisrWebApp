import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-qui-some-nous',
  templateUrl: './qui-some-nous.component.html',
  styleUrls: ['./qui-some-nous.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class QuiSomeNousComponent implements OnInit {

  constructor() { }

  slogons = [
    "Nous plaçons la préscolarisation au coeur de l'éducation et de la protection de la petite enfance",
    "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!",
    "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!"
  ];

  ngOnInit() {
    $('img').on("load", function () {
      $(".loading-screen-wrapper").fadeOut("slow")
    });
  }

}
