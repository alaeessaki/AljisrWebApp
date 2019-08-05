import { Injectable } from '@angular/core';
import { Trophie } from '../declarations';

@Injectable({
  providedIn: 'root'
})
export class TrophiesService {
  Trophies: Trophie[]
  constructor() { 
    this.Trophies = [
      { id: 1, name: "prix de la citoyenneté et de l'engagement 1", details: "This is trophie 1 details Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas, modi saepe earum delectus in ut perspiciatis et rem excepturi, cum repellendus totam deleniti molestias sapiente dolore maiores maxime quod!", img: "../../assets/trophies/trophie1.png" },
      { id: 2, name: "prix de la citoyenneté et de l'engagement 2", details: "This is trophie 2 details Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas, modi saepe earum delectus in ut perspiciatis et rem excepturi, cum repellendus totam deleniti molestias sapiente dolore maiores maxime quod!", img: "../../assets/trophies/trophie2.png" },
      { id: 3, name: "prix de la citoyenneté et de l'engagement 3", details: "This is trophie 3 details Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas, modi saepe earum delectus in ut perspiciatis et rem excepturi, cum repellendus totam deleniti molestias sapiente dolore maiores maxime quod!", img: "../../assets/trophies/trophie3.png" },
      { id: 4, name: "prix de la citoyenneté et de l'engagement 4", details: "This is trophie 4 details Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas, modi saepe earum delectus in ut perspiciatis et rem excepturi, cum repellendus totam deleniti molestias sapiente dolore maiores maxime quod!", img: "../../assets/trophies/trophie4.png" },
      { id: 5, name: "prix de la citoyenneté et de l'engagement 5", details: "This is trophie 5 details Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quas, modi saepe earum delectus in ut perspiciatis et rem excepturi, cum repellendus totam deleniti molestias sapiente dolore maiores maxime quod!", img: "../../assets/trophies/trophie5.png" },
    ];
  }
  getTrophies(){
    return this.Trophies;
  }
}
