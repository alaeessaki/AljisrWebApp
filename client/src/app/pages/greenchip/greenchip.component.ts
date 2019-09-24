import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-greenchip',
  templateUrl: './greenchip.component.html',
  styleUrls: ['./greenchip.component.scss']
})
export class GreenchipComponent implements OnInit {

  constructor() { }
  slogons = [
    "Nous plaçons la préscolarisation au coeur de l'éducation et de la protection de la petite enfance",
    "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!",
    "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim ullam voluptatibus quo quasi? Quasi, nesciunt. Pariatur harum sapiente laboriosam vero est corporis cumque, recusandae sequi, architecto quia totam asperiores!"
  ];
  numbers = [
    { 'icon': '../../../assets/icons/tool.png', 'number': '550+', 'text': ' jeunes Diplômés en “Maintenance informatique” et insérés en entreprise' },
    { 'icon': '../../../assets/icons/computer.png', 'number': '1500+', 'text': 'appareils réparés et distribués aux écoles publiques et associations au maroc ' },
    { 'icon': '../../../assets/icons/bolt.png', 'number': '150000+', 'text': 'Articles collectés traités ou reconditionnés et plus 680 tonnes livrés à Managem pour traitement et recyclage' }
  
  ]
  ngOnInit() {
    $('img').on("load", function () {
      $(".loading-screen-wrapper").fadeOut("slow")
    }
    );
  }

}
