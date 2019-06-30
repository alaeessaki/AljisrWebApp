import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-counter-up-section',
  templateUrl: './counter-up-section.component.html',
  styleUrls: ['./counter-up-section.component.scss']
})
export class CounterUpSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll() {
    var coun = document.getElementById("counter");
    console.log(coun.clientHeight);
  }

}


