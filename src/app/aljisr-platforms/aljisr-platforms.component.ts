import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-aljisr-platforms',
  templateUrl: './aljisr-platforms.component.html',
  styleUrls: ['./aljisr-platforms.component.scss']
})
export class AljisrPlatformsComponent implements OnInit {
  platforms: Array<any> = [];

  
  constructor() {
   
  }
  quotes:Array<string> = ["Qui lit pense \nQui pense raisonne", "blalala \nblablabla"]

  index = 0;
  currentQuote = this.quotes[this.index];

  ngOnInit() {
    let plats = document.querySelectorAll('.plat');
    let platslink = document.querySelectorAll('.plat a');
    let platsicon = document.querySelectorAll('.plat img');
    plats.forEach(function (element, index) {
      element.addEventListener('mouseover', () => {
        (<any>element).style = "background-color:#22C0FF; cursor:pointer";
        (<any>platslink[index]).style = "color: white";
        (<any>platsicon[index]).style = " -webkit-filter: unset ; filter: unset;  width: 25px; height: 20px; position: absolute; bottom: 15px; right: 25px;";

      })
      element.addEventListener('mouseout', () => {
        (<any>element).style = "background-color:white";
        (<any>platslink[index]).style = "color: black";
        (<any>platsicon[index]).style = " -webkit-filter: invert(100%); filter: invert(100%);  width: 25px; height: 20px; position: absolute; bottom: 15px; right: 25px;";
      })
    })



    let _this = this;
    function thisBind(){
      _this.change();
    }
    setInterval(thisBind, 3000);

  }

  title = "My Jisr";
  description = "Cette plateforme est principalement à la disposition et au service de tous les acteurs œuvrant à ‘’restaurer’’ et améliorer l’éducation prioritaire, fondamentale. Elle donne de la visibilité à leurs actions en valorisant tout ce qui s’entreprend, se réalise, ou s’envisage au sein de chaque catégorie d’intervenants. En espace de proximité, d’interaction et d’interactivité, elle contribue à la constructivité et à la construction d’un modèle de communication, d’information, de traitement, de suivi et de coordination autour des problématiques et des exigences de l’éducation."


  change() {
    if (this.index < this.quotes.length - 1) {
      this.index++;
      this.currentQuote = this.quotes[this.index];
    }
    else {
      this.index = 0;
      this.currentQuote = this.quotes[this.index];
    }
  }
}
