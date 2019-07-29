import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Trophie } from '../declarations';


@Component({
  selector: 'app-trophies',
  templateUrl: './trophies-binder.component.html',
  styleUrls: ['./trophies-binder.component.scss']
})
export class TrophiesBinderComponent implements OnInit {

  constructor() { }

  Trophies: Trophie[] = [
    { id: 1, name: "prix de la citoyenneté et de l'engagement 1", details: "This is trophie 1 details Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas, modi saepe earum delectus in ut perspiciatis et rem excepturi, cum repellendus totam deleniti molestias sapiente dolore maiores maxime quod!", img: "../../assets/trophies/trophie1.png" },

    { id: 2, name: "prix de la citoyenneté et de l'engagement 2", details: "This is trophie 2 details Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas, modi saepe earum delectus in ut perspiciatis et rem excepturi, cum repellendus totam deleniti molestias sapiente dolore maiores maxime quod!", img: "../../assets/trophies/trophie2.png" },

    { id: 3, name: "prix de la citoyenneté et de l'engagement 3", details: "This is trophie 3 details Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas, modi saepe earum delectus in ut perspiciatis et rem excepturi, cum repellendus totam deleniti molestias sapiente dolore maiores maxime quod!", img: "../../assets/trophies/trophie3.png" },

    { id: 4, name: "prix de la citoyenneté et de l'engagement 4", details: "This is trophie 4 details Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas, modi saepe earum delectus in ut perspiciatis et rem excepturi, cum repellendus totam deleniti molestias sapiente dolore maiores maxime quod!", img: "../../assets/trophies/trophie4.png" },

    { id: 5, name: "prix de la citoyenneté et de l'engagement 5", details: "This is trophie 5 details Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas, modi saepe earum delectus in ut perspiciatis et rem excepturi, cum repellendus totam deleniti molestias sapiente dolore maiores maxime quod!", img: "../../assets/trophies/trophie5.png" },
  ];
  ngOnInit() {
    this.changed(Math.round(this.Trophies.length/2));
  }

  selectedTrophie: Trophie = this.Trophies[Math.floor(this.Trophies.length / 2)];
  onSelectTrophie(trophie: Trophie): void {
    this.selectedTrophie = trophie;
  }
  changed(id) {
    var rect = document.getElementById("trophieRectangle");
    rect.style.transition = "left 1s";
    rect.style.left = +id*10+30+"px";
  }

}
