import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemoinsService {

  constructor(private http: HttpClient) { }
  getTemoins(){
    return this.http.get(window.location.origin+'/api/temoins');
  }
}
