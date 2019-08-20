import { Component, OnInit } from '@angular/core';
import { SlogonsService } from './slogons.service';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  // init variables
  public language: string;
  private index: number;
  currentSlogon: string;
  private Slogons: Array<any>;

  // init data
  bigSlogon = {
    "fr":"INSPIRER \n LES JEUNES \n à enquêter",
    "en":"inspire \n young men \n to investigate"
  };

  constructor(private _slogonService: SlogonsService, private _langService: LangService) {
    this.Slogons = [];
  }

  // fetshing data from db
  // the index 0 si the index of this section
  getdata() {
    this._slogonService.getSlogons().subscribe(data => {
      data[0].slogons.forEach(slogon => {
        this.Slogons.push(slogon[this.language])
        this.getCurrentSlogon()
      });
    });
  }

  ngOnInit() {
    // getting the default language
    this.Slogons = [];
    this.language = this._langService.getLanguage();

    // fetching data
    this.getdata();
    let _this = this;

    // slogons carousel 
    function thisBind() {
      _this.change();
    }
    setInterval(thisBind, 3000);

  }

  // changing language method
  changeLanguage(lang: string) {
    // setting language cookie
    this._langService.setLanguage(lang);
    // reload the page to use the new language in cookie
    location.reload();
  }

  // getting the first slogon from slogons array
  getCurrentSlogon() {
    this.index = 0;
    this.currentSlogon = this.Slogons[this.index];
  }

  // changing current slogon method
  change() {
    if (this.index < this.Slogons.length - 1) {
      this.index++;
      this.currentSlogon = this.Slogons[this.index];
    }
    else {
      this.index = 0;
      this.currentSlogon = this.Slogons[this.index];
    }
  }

  // search bar toggle
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
