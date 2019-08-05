import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroSectionService {
  slogons:Array<any>; 
  constructor() { 
    this.slogons = [
      "Au service de l'école publique \n depuis 1999",
      "Aujourd'hui agissons ensemble pour \n l'école de demain"
    ];
  }
  getSlogon(){
    return this.slogons;
  }
}
