import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { events } from '../declarations';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EventsComponent implements OnInit {
  event: events[];
  selectedItem:events;
  constructor(private _events:EventsService) { }

  ngOnInit() {
    this.event = this._events.getEvents();
    this.selectedItem = this.event[0];
    this.changed(Math.round(this.event.length/2-1));
  }
  
  onSelect(item: events):void{
    this.selectedItem = item;
  }

  changed(id) {
    var rect = document.getElementById("eventsRectangle");
    rect.style.transition = "left 1s";
    rect.style.left = +id*10+30+"px";
  }

}
