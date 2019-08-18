import { Injectable } from '@angular/core';
import { temoins } from '../declarations';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  temoin: temoins[]

  constructor(private http:HttpClient) {
   }
   getTemoins(){
     return this.http.get('http://localhost:3000/api/temoins');
   }
}
