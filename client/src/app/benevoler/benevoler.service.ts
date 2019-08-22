import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BenevolerService {

  constructor(private _http: HttpClient) { }
  sendBenevoler(benevoler) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._http.post("http://localhost:3200/api/addBenevoles", benevoler, httpOptions)
  
  }
}
