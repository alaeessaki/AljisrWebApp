import { Component, OnInit, Input } from '@angular/core';
import {Trophie} from '../declarations';

@Component({
  selector: 'app-trophie-details',
  templateUrl: './trophie-details.component.html',
  styleUrls: ['./trophie-details.component.scss']
})
export class TrophieDetailsComponent implements OnInit {
  @Input() selectedTrophie:Trophie;
  constructor() { 
   
  }
  ngOnInit() {
  }

}