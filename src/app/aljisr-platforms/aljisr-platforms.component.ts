import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aljisr-platforms',
  templateUrl: './aljisr-platforms.component.html',
  styleUrls: ['./aljisr-platforms.component.scss']
})
export class AljisrPlatformsComponent implements OnInit {
  platforms: Array<any> = [];
  constructor() { 
    this.platforms = [
      { background: '../../assets/myjisr/educateurs.jpg', color:"rgba(52,152,219)", title:"Educateurs" ,subicon:"../../assets/icons/open-magazine.png",description:"cette plateforme dédiée aux educatrices(eurs) de primaire" },
      { background: '../../assets/myjisr/partenaires.jpg' , color:"rgba(103,55,131)", title:"Partenaires" ,subicon:"../../assets/icons/respect.png",description:"cette plateforme dédiée aux partenaires de l'association" },
      { background: '../../assets/myjisr/benevoles.jpg' , color:"rgba(25,174,118)", title:"Bénévoles" ,subicon:"../../assets/icons/volunteer.png",description:"cette plateforme dédiée aux differents bénévoles de l'association" },
      { background: '../../assets/myjisr/association.jpg', color:"rgba(52,152,219)",title:"Associatifs",subicon:"../../assets/icons/partnership.png", description:"cette plateforme dédiée aux differents associations"  },
      { background: '../../assets/myjisr/parents.jpg', color:"rgba(103,55,131)",title:"Parents",subicon:"../../assets/icons/family.png",description:"cette plateforme dédiée aux apprenants"  },
      { background: '../../assets/myjisr/team.jpg', color:"rgba(25,174,118)",title:"Team Al Jisr",subicon:"../../assets/icons/team.png",description:"cette plateforme dédiée aux team aljisr"  }
    ]
  }

  ngOnInit() {
  }

  title = "My Jisr";
  description = "Cette plateforme est principalement à la disposition et au service de tous les acteurs œuvrant à ‘’restaurer’’ et améliorer l’éducation prioritaire, fondamentale. Elle donne de la visibilité à leurs actions en valorisant tout ce qui s’entreprend, se réalise, ou s’envisage au sein de chaque catégorie d’intervenants. En espace de proximité, d’interaction et d’interactivité, elle contribue à la constructivité et à la construction d’un modèle de communication, d’information, de traitement, de suivi et de coordination autour des problématiques et des exigences de l’éducation."

}
