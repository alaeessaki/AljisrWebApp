import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pole-education',
  templateUrl: './pole-education.component.html',
  styleUrls: ['./pole-education.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PoleEducationComponent implements OnInit {

  constructor() { }

  slogons = [
    "Nous plaçons la préscolarisation au coeur de l'éducation et de la protection de la petite enfance",
    "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!",
    "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!"
  ];

  ngOnInit() {
  }

}
