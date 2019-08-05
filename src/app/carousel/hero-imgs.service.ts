import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroImgsService {
  Images:Array<any>
  constructor() {
     this.Images = [
      {
        source: "../assets/hero2.jpg",
        alt: "A girl and a boy writing their notes in a paper"
      },
      {
        source: "../assets/hero3.jpg",
        alt: "The president of Aljisr reading his speech"
      },
      {
        source: "../assets/hero4.jpg",
        alt: "The president of Aljisr reading his speech"
      },
      {
        source: "../assets/hero5.jpg",
        alt: "The president of Aljisr reading his speech"
      },
      {
        source: "../assets/hero6.jpg",
        alt: "The president of Aljisr reading his speech"
      }
    ];
   }

   getImages(){
     return this.Images;
   }
}
