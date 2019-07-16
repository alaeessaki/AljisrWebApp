import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss']
})
export class TrophiesComponent implements OnInit {
  trophies: Array<any>;
  constructor() {
    this.trophies = [
      { title: "Crystal trophie", img: "../../assets/trophies/trophie1.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ullam itaque. Sapiente laboriosam cupiditate ipsum amet, omnis" },
      { title: "Crystal trophie", img: "../../assets/trophies/trophie2.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ullam itaque. Sapiente laboriosam cupiditate ipsum amet, omnis" },
      { title: "Crystal trophie", img: "../../assets/trophies/trophie1.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ullam itaque. Sapiente laboriosam cupiditate ipsum amet, omnis" },
      { title: "Crystal trophie", img: "../../assets/trophies/trophie2.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ullam itaque. Sapiente laboriosam cupiditate ipsum amet, omnis" },
      { title: "Crystal trophie", img: "../../assets/trophies/trophie1.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ullam itaque. Sapiente laboriosam cupiditate ipsum amet, omnis" }
    ]
  }

  ngOnInit() {
  }

}
