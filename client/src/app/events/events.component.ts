import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { events } from '../declarations';
import { EventsService } from './events.service';
import { Observable } from 'rxjs';
import { LangService } from '../lang.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EventsComponent implements OnInit {
  events$: Observable<any>;
  selectedItem;
  language
  constructor(private _events:EventsService, private langService:LangService) { }

  ngOnInit() {
    this.events$ = this._events.getEvents();
    this.events$.subscribe(data=>{
      this.selectedItem = data[0];
      this.language = this.langService.getLanguage()
      console.log(this.selectedItem.date)
    })
  }
  
  onSelect(item: events):void{
    this.selectedItem = item;
  }

  changed(id) {
    var rect = document.getElementById("eventsRectangle");
    rect.style.transition = "left 1s";
    rect.style.left = +id*10+50+"px";
  }

}
