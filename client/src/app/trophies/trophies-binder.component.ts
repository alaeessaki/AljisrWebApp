import { Component, OnInit } from '@angular/core';
import { Trophie } from '../declarations';
import {TrophiesService} from './trophies.service';


@Component({
  selector: 'app-trophies',
  templateUrl: './trophies-binder.component.html',
  styleUrls: ['./trophies-binder.component.scss']
})
export class TrophiesBinderComponent implements OnInit {
  Trophies: Trophie[];
  selectedTrophie: Trophie;
  constructor(private _trophies:TrophiesService) { }

  
  ngOnInit() {
    this.Trophies = this._trophies.getTrophies();
    this.selectedTrophie  = this.Trophies[Math.floor(this.Trophies.length / 2)];
    this.changed(Math.round(this.Trophies.length/2));
  }

  
  onSelectTrophie(trophie: Trophie): void {
    this.selectedTrophie = trophie;
  }
  
  changed(id) {
    var rect = document.getElementById("trophieRectangle");
    rect.style.transition = "left 1s";
    rect.style.left = +id*10+30+"px";
  }

}
