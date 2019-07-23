import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aljisr-platforms',
  templateUrl: './aljisr-platforms.component.html',
  styleUrls: ['./aljisr-platforms.component.scss']
})
export class AljisrPlatformsComponent implements OnInit {
  platforms: Array<any> = [];
  constructor() { 
  
  }

  ngOnInit() {
  }

  title = "My Jisr";
  description = "Cette plateforme est principalement à la disposition et au service de tous les acteurs œuvrant à ‘’restaurer’’ et améliorer l’éducation prioritaire, fondamentale. Elle donne de la visibilité à leurs actions en valorisant tout ce qui s’entreprend, se réalise, ou s’envisage au sein de chaque catégorie d’intervenants. En espace de proximité, d’interaction et d’interactivité, elle contribue à la constructivité et à la construction d’un modèle de communication, d’information, de traitement, de suivi et de coordination autour des problématiques et des exigences de l’éducation."

}
