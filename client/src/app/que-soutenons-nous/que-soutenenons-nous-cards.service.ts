import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueSoutenenonsNousCardsService {

  constructor(private http: HttpClient) { }
  getCards(){
    return this.http.get('http://localhost:3200/api/qstnCards');
  }
}
