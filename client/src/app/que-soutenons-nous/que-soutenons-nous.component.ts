import { Component, OnInit } from '@angular/core';
import { QueSoutenenonsNousCardsService } from './que-soutenenons-nous-cards.service'
import { LangService } from '../lang.service';

@Component({
  selector: 'app-que-soutenons-nous',
  templateUrl: './que-soutenons-nous.component.html',
  styleUrls: ['./que-soutenons-nous.component.scss']
})
export class QueSoutenonsNousComponent implements OnInit {
  language:string
  title: string;
  subtitle: string;
  sections:any;

  constructor(private _cardsService: QueSoutenenonsNousCardsService, private _langService:LangService) {
  }
  ngOnInit() {
    this.language = this._langService.getLanguage();
    this._cardsService.getCards().subscribe(data => {
      this.sections = data;
    })
  }

  // Hover function
  active(section) {

    this.sections.forEach(element => {
      // getting liner's rect
      var rect = document.getElementById('rectangle');
      // checking if the element in the loop is the one that the mouse is over it
      if (element == section) {
        element.active = true;
        element.icon = `../../assets/Que-soutenons-nous/${element.hoverId}-white.png`;
        // move the rect to the place according to cards hover id
        if (element.hoverId == 1) {
          rect.style.transition = "left 1s";
          rect.style.left = "40px";
        }
        else if (element.hoverId == 2) {
          rect.style.transition = "left 1s";
          rect.style.left = "60px";
        }
        else {
          rect.style.transition = "left 1s";
          rect.style.left = "80px";
        }
      }
      // if the element is not the one that is the mouse on the icon turns grey and get a property of not active
      else {
        element.active = false;
        element.icon = `../../assets/Que-soutenons-nous/${element.hoverId}.png`;
      }
    });

  }

}
