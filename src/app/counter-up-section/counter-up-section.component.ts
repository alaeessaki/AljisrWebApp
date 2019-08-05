import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NavigationEnd, Router } from '@angular/router';
import { AljisrNumsService } from './aljisr-nums.service';

@Component({
  selector: 'app-counter-up-section',
  templateUrl: './counter-up-section.component.html',
  styleUrls: ['./counter-up-section.component.scss']
})
export class CounterUpSectionComponent implements OnInit {
  countSections: Array<any>;
  isHome = false;

  constructor(private _router: Router, private _AljisrNums: AljisrNumsService) {
    this._router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          if (this._router.url == "/") {
            this.isHome = true;
            this.scrollCounter();
          }
          else {
            this.isHome = false;
            this.scrollCounter();
          }
        }
      }
    );
  }

  ngOnInit() {
    this.countSections = this._AljisrNums.getNums();
  }

  getRoutePos() {
    return this.isHome;
  }
  public justScroll() {
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
  }

  scrollCounter() {
    var home = this.getRoutePos();
    if (home == true) {
      this.justScroll();
    }
    else {
      console.log("you're in else");
    }
  }

  title = "Al jisr en chiffres";

}