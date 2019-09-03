import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('img').on("load", function () {
      setTimeout(() => { $(".splash-wrapper").fadeOut("slow") }, 500);
    });
  }

}
