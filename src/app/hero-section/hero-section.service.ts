import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroSectionService {
  slogons:Array<any>; 
  constructor(private http: HttpClient) { 

  }
  getSlogon(){
    return this.http.get('http://localhost:3000/api/quotes');
  }
}
