import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlogonsService {

  constructor(private http: HttpClient) { }
  getSlogons(){
    return this.http.get('http://localhost:3200/api/slogons');
  }
}
