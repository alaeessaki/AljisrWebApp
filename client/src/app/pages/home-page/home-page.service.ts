import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) { }
  getdata(){
    return this.http.get('http://localhost:3200/api/homePage');
  }
}
