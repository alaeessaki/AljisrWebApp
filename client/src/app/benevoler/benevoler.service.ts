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
    // return this._http.post(window.location.origin+"/api/addBenevoles", benevoler, httpOptions)
    return this._http.post("/api/addBenevoles", benevoler, httpOptions)
  }
}
