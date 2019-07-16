import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  constructor() {
  }

  slogons: Array<any> = [
    "Au service de l'école publique \n depuis 1999",
    "Aujourd'hui agissons ensemble pour \n l'école de demain"
  ];
  
  index = 0;
  currentSlogon = this.slogons[this.index];

  ngOnInit() {  
    let _this = this;
    function thisBind(){
      _this.change();
    }
    setInterval(thisBind, 3000);

   }

  change() {
      if(this.index<this.slogons.length -1){
        this.index ++;
        this.currentSlogon = this.slogons[this.index];
      }
      else{
        this.index = 0;
        this.currentSlogon = this.slogons[this.index];
      }
  }

  
  isClicked = false;
  clicked() {
    if (this.isClicked) {
      this.isClicked = false;
    }
    else {
      this.isClicked = true;
    }
  }
}
