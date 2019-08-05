import { Component, OnInit } from '@angular/core';
import { HeroSectionService } from './hero-section.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  index: number;
  currentSlogon: string;
  slogons: Array<any>;
  constructor(private _heroSection: HeroSectionService) {
  }



  ngOnInit() {
    this.slogons = this._heroSection.getSlogon();
    this.getCurrentSlogon();
    let _this = this;
    function thisBind() {
      _this.change();
    }
    setInterval(thisBind, 3000);

  }
  getCurrentSlogon() {
    this.index = 0;
    this.currentSlogon = this.slogons[this.index];
  }

  change() {
    if (this.index < this.slogons.length - 1) {
      this.index++;
      this.currentSlogon = this.slogons[this.index];
    }
    else {
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
