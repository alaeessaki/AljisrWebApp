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
  selectedSlogon;
  i = 0;

  // init data

  actions = [
    {
      "title": {
        "fr": "Association Al jisr",
        "en": "inspire young men to investigate"
      },
      "slogon": {
        "fr": "l’association Al Jisr a le privilège d’être placée sous la Présidence d’honneur de Sa Majesté le Roi Mohammed VI et bénéficie de la Reconnaissance d’Utilité Publique depuis 2007.",
        "en": "l’association Al Jisr a le privilège d’être placée sous la Présidence d’honneur de Sa Majesté le Roi Mohammed VI et bénéficie de la Reconnaissance d’Utilité Publique depuis 2007."
      },
      "link": {
        'text': "Voir plus sur l'association",
        'router': '#'
      }
    },
    {
      "title": {
        "fr": "UN GESTE SIMPLE",
        "en": "UN GESTE SIMPLE"
      },
      "slogon": {
        "fr": "devenir bénévole, Une bonne idée ! ",
        "en": "devenir bénévole, Une bonne idée ! "
      },
      "link": {
        'text': "DEVENIR BÉNÉVOLE",
        'router': '#'
      }
    }
  ]

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


    // carousel of big slogons
    this.selectedSlogon = this.actions[this.i];

    setInterval(()=>{
      if(this.i < (<any>this.actions).length - 1){
        this.i++;
        this.selectedSlogon = this.actions[this.i];
      }
      else{
        this.i = 0;
        this.selectedSlogon = this.actions[this.i];
      }
    }, 5000)

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
    let logo = document.querySelector('.homeLogo');
    let screenWidth = window.innerWidth;
    if (this.isClicked) {
      if (screenWidth < 1050) {
        (<any>logo).style = "display:unset";
      }
      this.isClicked = false;
    }
    else {
      if (screenWidth < 1050) {
        (<any>logo).style = "display:none";
      }
      this.isClicked = true;
    }
  }
}
