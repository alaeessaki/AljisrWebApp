import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroImgsService {
  Images:Array<any>
  constructor(private http:HttpClient) {
   }

   getImages(){
     return this.http.get('http://localhost:3000/api/imgs');
   }
}
