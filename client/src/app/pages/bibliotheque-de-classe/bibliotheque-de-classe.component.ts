import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-bibliotheque-de-classe',
  templateUrl: './bibliotheque-de-classe.component.html',
  styleUrls: ['./bibliotheque-de-classe.component.scss']
})
export class BibliothequeDeClasseComponent implements OnInit {
  
  slogons = [
    "Nous plaçons la préscolarisation au coeur de l'éducation et de la protection de la petite enfance",
    "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!",
    "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!"
  ];

  numbers = [
    {'icon':'../../../assets/icons/book.png', 'number':'1150+', 'text':'Guides Bc distribués au profit de 2 AREFS : Casablanca-Settat , Tanger-Tetouan'},
    {'icon':'../../../assets/icons/presentation-board-with-graph.png', 'number':'11+', 'text':'écoles  équipées en BC au niveau de la province de Nouaceur'},
    {'icon':'../../../assets/icons/smile.png', 'number':'71+', 'text':'écoles  participantes au concours de lecture au sein de la province de Nouaceur '},
    {'icon':'../../../assets/icons/pencil.png', 'number':'28400+', 'text':'élèves participants au concours'},
    {'icon':'../../../assets/icons/teacher.png', 'number':'120+', 'text':'enseignants (tes) bénéficaires de la formation sur le guide BC '},
    {'icon':'../../../assets/icons/study.png', 'number':'6457+', 'text':"livres distribuées dans le cadre de l'opération BC dans les six niveaux de classes dans la province de Nouaceur"}
  ]

  constructor() { }

  ngOnInit() {
    $('img').on("load", function () {
      $(".loading-screen-wrapper").fadeOut("slow")
    }
    );
  }

}
