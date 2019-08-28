import { Component, OnInit, Input } from '@angular/core';
import {events} from '../declarations';


@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class EventsDetailsComponent implements OnInit {
  @Input() event:events;
  @Input() language;
  constructor() { }

  ngOnInit() {
  }

  
}
