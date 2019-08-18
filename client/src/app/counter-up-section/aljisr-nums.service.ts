import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AljisrNumsService {
  nums:Array<any>;
  constructor() { 
    this.nums = [
      { title: "Volontaires", countend: 1000, counticon: "../../assets/enchiffre/icon3.png", h: 60, w: 40 },
      { title: "Villes", countend: 5, counticon: "../../assets/enchiffre/icon2.png", h: 40, w: 60 },
      { title: "Partenaires", countend: 130, counticon: "../../assets/enchiffre/icon1.png", h: 40, w: 40 },
      { title: "Projets", countend: 600, counticon: "../../assets/enchiffre/icon3.png", h: 60, w: 40 },
      { title: "Experience", countend: 20, counticon: "../../assets/enchiffre/icon2.png", h: 40, w: 60 },
      { title: "Programmes", countend: 42, counticon: "../../assets/enchiffre/icon1.png", h: 40, w: 40 }
    ]
  }
  getNums(){
    return this.nums;
  }
}
