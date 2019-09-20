import { Component, OnInit } from '@angular/core';


import * as $ from 'jquery';


@Component({
  selector: 'app-c2c',
  templateUrl: './c2c.component.html',
  styleUrls: ['./c2c.component.scss']
})
export class C2cComponent implements OnInit {

  constructor() { }

  slogons = [
    "Nous plaçons la préscolarisation au coeur de l'éducation et de la protection de la petite enfance",
    "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!",
    "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!"
  ];
  
  ngOnInit() {
    $('img').on("load", function () {
      $(".loading-screen-wrapper").fadeOut("slow")
    }
    );
  }

}
