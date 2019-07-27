import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-counter-up-section',
  templateUrl: './counter-up-section.component.html',
  styleUrls: ['./counter-up-section.component.scss']
})
export class CounterUpSectionComponent implements OnInit {
  countSections: Array<any>;
  constructor() {
    this.countSections = [
      { title: "Volontaires", countend: 1000, counticon: "../../assets/enchiffre/icon3.png", h: 60, w: 40 },
      { title: "Villes", countend: 5, counticon: "../../assets/enchiffre/icon2.png", h: 40, w: 60 },
      { title: "Partenaires", countend: 130, counticon: "../../assets/enchiffre/icon1.png", h: 40, w: 40 },
      { title: "Projets", countend: 600, counticon: "../../assets/enchiffre/icon3.png", h: 60, w: 40 },
      { title: "Experience", countend: 20, counticon: "../../assets/enchiffre/icon2.png", h: 40, w: 60 },
      { title: "Programmes", countend: 42, counticon: "../../assets/enchiffre/icon1.png", h: 40, w: 40 }
    ]
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

  title = "Al jisr en chiffres";

}
