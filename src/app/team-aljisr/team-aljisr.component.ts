import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-team-aljisr',
  templateUrl: './team-aljisr.component.html',
  styleUrls: ['./team-aljisr.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeamAljisrComponent implements OnInit {
  images: Array<any> = [];
  constructor() {
    this.images = [
      { name: '../../assets/educ.png', color:"rgba(52,152,219, 0.76)" },
      { name: '../../assets/env.png' , color:"rgba(25,174,118, 0.76)" },
      { name: '../../assets/inno.png' , color:"rgba(103,55,131, 0.76)" },
      { name: 'http://lorempixel.com/640/480/cats/', color:"rgba(103,55,131, 0.76)"  }
    ]
   }

  ngOnInit() {
  }

}
