import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../pages/home-page/home-page.service'


@Component({
  selector: 'app-que-soutenons-nous',
  templateUrl: './que-soutenons-nous.component.html',
  styleUrls: ['./que-soutenons-nous.component.scss']
})
export class QueSoutenonsNousComponent implements OnInit {
  title: string;
  subtitle: string;
  sections: Array<any>;

  constructor(private _homePage: HomePageService) {
  }

  ngOnInit() {
    this._homePage.getdata().subscribe(data => {
      this.sections = data[0].queSetounonsNous.cards;
      this.title = data[0].queSetounonsNous.title;
      this.subtitle = data[0].queSetounonsNous.subtitle;
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
