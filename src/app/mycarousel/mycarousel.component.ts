import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-mycarousel',
  templateUrl: './mycarousel.component.html',
  styleUrls: ['./mycarousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MycarouselComponent implements OnInit {
  images: Array<any> = [];
  constructor() {
    this.images = [
      { name: '../../assets/educ.png', color:"rgba(52,152,219, 0.76)", title:"Education" ,subicon:"../../assets/book.png" },
      { name: '../../assets/env.png' , color:"rgba(25,174,118, 0.76)", title:"Environnement" ,subicon:"../../assets/plant.png" },
      { name: '../../assets/inno.png' , color:"rgba(103,55,131, 0.76)", title:"Innovation" ,subicon:"../../assets/innovation.png" },
      { name: 'http://lorempixel.com/640/480/cats/', color:"rgba(103,55,131, 0.76)",title:"Lorem",subicon:"../../assets/innovation.png"  }
    ]
  }

  ngOnInit() {
   
  }

}


