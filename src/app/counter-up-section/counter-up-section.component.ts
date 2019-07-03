import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter-up-section',
  templateUrl: './counter-up-section.component.html',
  styleUrls: ['./counter-up-section.component.scss']
})
export class CounterUpSectionComponent implements OnInit {

  constructor() {
  }

  num1 = 0;
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);

  }



  public scroll() {
    var coun = document.getElementById("counter");
    let coor = coun.getBoundingClientRect();


    // console.log({
    //   top: coor.top,
    //   left: coor.left
    // });

    if (coor.top < 723) {
      console.log("bobo");

    }

  }

  // countUP js lib

}
