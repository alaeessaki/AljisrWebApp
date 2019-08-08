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
      { id: 1, title: "accompagner", description: "Nous plaçons la préscolarisation au coeur de l'éducation et de la protection de la petite enfance, et par la lecture nous renforçons connaissances et apprentissages de enfants de l'école publique", icon: "../../assets/Que-soutenons-nous/1.png", active: false },

      { id: 2, title: "former & insérer", description: "Contre l'échec, nous formons à des métiers et insérons en entreprises, nous dennons une deuxième chance pour développer un parcours scioprofessionel", icon: "../../assets/Que-soutenons-nous/2-white.png", active: true },

      { id: 3, title: "impacter", description: "Nous participons au progrès social avec des projets accélérateurs de développement et de qualité de vie", icon: "../../assets/Que-soutenons-nous/3.png", active: false }
    ]
  }

  ngOnInit() {
  }

  // Hover function
  active(section) {

    this.sections.forEach(element => {
      // getting liner's rect
      var rect = document.getElementById('rectangle');
      // checking if the element in the loop is the one that the mouse is over it
      if (element == section) {
        element.active = true;
        element.icon = `../../assets/Que-soutenons-nous/${element.id}-white.png`;
        // move the rect to the place according to cards hover id
        if (element.id == 1) {
          rect.style.transition = "left 1s";
          rect.style.left = "40px";
        }
        else if (element.id == 2) {
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
        element.icon = `../../assets/Que-soutenons-nous/${element.id}.png`;
      }
    });
    
  }

}
