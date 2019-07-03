import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-counter-up-section',
  templateUrl: './counter-up-section.component.html',
  styleUrls: ['./counter-up-section.component.scss']
})
export class CounterUpSectionComponent implements OnInit {

  constructor() {


  }

  ngOnInit() {

    $('.counter').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },
        {
          duration: 4500,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
    });


  }
  num1: number = 0;
  test: boolean;
  // inc(){
  //   var somme = 0;
  //   somme = somme + 1;
  //   this.num1 = somme;
  // }
  scroll() {
    var coun = document.getElementById("counter");
    var coor = coun.getBoundingClientRect();
    if (coor.top < 453) {
      this.test = true;
    }
  }


  // countUP js lib

}
