import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AljisrNumsService } from './aljisr-nums.service';

@Component({
  selector: 'app-counter-up-section',
  templateUrl: './counter-up-section.component.html',
  styleUrls: ['./counter-up-section.component.scss']
})
export class CounterUpSectionComponent implements OnInit {
  countSections: Array<any>;
  isHome = false;

  constructor(private _AljisrNums: AljisrNumsService) {

  }

  ngOnInit() {
    this.countSections = this._AljisrNums.getNums();
    var scroller = document.querySelector('#counter');

    var inObserve = new IntersectionObserver(entries => {
      // If intersectionRatio is 0, the sentinel is out of view
      // and we do not need to do anything.
      if (entries[0].intersectionRatio <= 0) {
        return;
      }
      var passed_countup = false;
      $('body').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function (event) {

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

      });

    });

    inObserve.observe(scroller);

  }

  getRoutePos() {
    return this.isHome;
  }

  // public justScroll() {
  //   var passed_countup = false;
  //   $('body').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function (event) {
  //     if ($(window).scrollTop() >= ($("#countup_sec").offset().top - 400)) {
  //       if (!passed_countup) {
  //         $('.counter').each(function () {
  //           var $this = $(this),
  //             countTo = $this.attr('data-count');

  //           $({ countNum: $this.text() }).animate({
  //             countNum: countTo
  //           },
  //             {
  //               duration: 2000,
  //               easing: 'linear',
  //               step: function () {
  //                 $this.text(Math.floor(this.countNum));
  //               },
  //               complete: function () {
  //                 $this.text(this.countNum);
  //                 //alert('finished');
  //               }
  //             });
  //         });
  //         passed_countup = true;
  //       }
  //     }

  //   }).scroll();
  // }



  title = "Al jisr en chiffres";

}