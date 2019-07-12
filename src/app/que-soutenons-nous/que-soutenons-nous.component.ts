import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que-soutenons-nous',
  templateUrl: './que-soutenons-nous.component.html',
  styleUrls: ['./que-soutenons-nous.component.scss']
})
export class QueSoutenonsNousComponent implements OnInit {
  sections: Array<any> = [];
  constructor() { 
    this.sections = [
      {image:'../../assets/icons/internet.png',title:'DEVELOPEMENT DURABLE', description:"Lorem ipsum dolor sit am adipiscing elit, sed do eiusmod tempor incididunt"},

      {image:'../../assets/icons/open-book.png',title:'FORMATION', description:"Lorem ipsum dolor sit am adipiscing elit, sed do eiusmod tempor incididunt"},

      {image:'../../assets/icons/file.png',title:'EDUCATION', description:"Lorem ipsum dolor sit am adipiscing elit, sed do eiusmod tempor incididunt"},

      {image:'../../assets/icons/solar-energy.png',title:'Progrès social et innovation', description:"Lorem ipsum dolor sit am adipiscing elit, sed do eiusmod tempor incididunt"}

    ]
  }

  ngOnInit() {
  }

}
