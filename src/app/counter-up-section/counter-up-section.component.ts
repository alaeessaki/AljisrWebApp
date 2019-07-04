import { Component, OnInit, Input } from '@angular/core';
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

    $(document).ready(function () {
      var passed_countup = false;
      $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function (event) {

        if ($(window).scrollTop() >= ($("#countup_sec").offset().top - 400)) {
          if (!passed_countup) {
            $('.counter').each(function () {
              var $this = $(this),
                countTo = $this.attr('data-count');

              $({ countNum: $this.text() }).animate({
                countNum: countTo
              },
                {
                  duration: 2000,
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
            passed_countup = true;
          }
        }
      }).scroll();
    });
  }

}
