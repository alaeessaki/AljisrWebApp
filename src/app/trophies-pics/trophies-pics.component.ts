import { Component, OnInit, Input } from '@angular/core';
import { Trophie } from '../declarations';

@Component({
  selector: 'app-trophies-pics',
  templateUrl: './trophies-pics.component.html',
  styleUrls: ['./trophies-pics.component.scss']
})
export class TrophiesPicsComponent implements OnInit {

  @Input() selectedTrophie: Trophie;

  rect;
  imgPreloadUrl: string;
  constructor() { 
    this.rect = document.getElementById('trophieRectangle');
  }

  ngOnInit() {
  }

  onSelectTrophie() {
    // var rect = document.getElementById('trophie-rectangle');
    // rect.style.transition = "left 1s";
    // rect.style.left = "40px"+this.selectedTrophie.id+10;
  }
}