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
      { name: '../../assets/myjisr/educateurs.jpg', color:"rgba(52,152,219)", title:"Educateurs" ,subicon:"../../assets/book.png",description:"cette plateforme dédiée aux educatrices(eurs) de primaire" },
      { name: '../../assets/myjisr/partenaires.jpg' , color:"rgba(103,55,131)", title:"Partenaires" ,subicon:"../../assets/plant.png",description:"cette plateforme dédiée aux partenaires de l'association" },
      { name: '../../assets/myjisr/benevoles.jpg' , color:"rgba(25,174,118)", title:"Bénévoles" ,subicon:"../../assets/innovation.png",description:"cette plateforme dédiée aux differents bénévoles de l'association" },
      { name: '../../assets/myjisr/association.jpg', color:"rgba(52,152,219)",title:"Associatifs",subicon:"../../assets/innovation.png", description:"cette plateforme dédiée aux differents associations"  },
      { name: '../../assets/myjisr/parents.jpg', color:"rgba(103,55,131)",title:"Parents",subicon:"../../assets/innovation.png",description:"cette plateforme dédiée aux apprenants"  },
      { name: '../../assets/myjisr/team.jpg', color:"rgba(25,174,118)",title:"Team Al Jisr",subicon:"../../assets/innovation.png",description:"cette plateforme dédiée aux team aljisr"  }
    ]
  }

  ngOnInit() {
  }

}
