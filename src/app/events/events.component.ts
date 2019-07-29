import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { events } from '../declarations';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.changed(Math.round(this.event.length/2-1));
  }
  event: events[] = [
    {id:1,title: "Atelier codage scratch", date: "08 JUL", description: "Event 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto dolor cumque consectetur expedita, repellat commodi molestias velit ipsam ex quisquam dicta necessitatibus incidunt optio laborum possimus. Animi, eos quisquam."},
    {id:2,title: "Formation en communication", date: "03 SEP", description: "Event 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto dolor cumque consectetur expedita, repellat commodi molestias velit ipsam ex quisquam dicta necessitatibus incidunt optio laborum possimus. Animi, eos quisquam."},
    {id:3,title: "Céremonie des bénévolats", date: "13 JUI", description: "Event 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto dolor cumque consectetur expedita, repellat commodi molestias velit ipsam ex quisquam dicta necessitatibus incidunt optio laborum possimus. Animi, eos quisquam."},
    {id:4,title: "conférence sur l'éducation", date: "10 MAI", description: "Event 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto dolor cumque consectetur expedita, repellat commodi molestias velit ipsam ex quisquam dicta necessitatibus incidunt optio laborum possimus. Animi, eos quisquam."}
  ]

  selectedItem:events = this.event[0];
  
  onSelect(item: events):void{
    this.selectedItem = item;
  }

  changed(id) {
    var rect = document.getElementById("eventsRectangle");
    rect.style.transition = "left 1s";
    rect.style.left = +id*10+30+"px";
  }

}
