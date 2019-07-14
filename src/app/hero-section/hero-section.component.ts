import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isClicked = false;
  clicked(){
    if(this.isClicked){
      this.isClicked = false;
    }
    else{
      this.isClicked = true;
    }
  }
}
