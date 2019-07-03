import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dernieres-nouv',
  templateUrl: './dernieres-nouv.component.html',
  styleUrls: ['./dernieres-nouv.component.scss']
})
export class DernieresNouvComponent implements OnInit {
  images: Array<any> = [];
  constructor() {
    this.images = [
      { name: '../../assets/img1.jpg', color:"rgba(103,55,131)", pos:0, title:"Cérémonie des bénévolats" },
      { name: '../../assets/img2.jpg' , color:"rgba(25,174,118)", pos:1 ,title: "Atelier de formation greenship"},
      { name: '../../assets/img3.jpg' , color:"rgba(52,152,219)" , pos:0, title:"Atelier de formation C2C"},
    ]
   }

  ngOnInit() {
  }

}
