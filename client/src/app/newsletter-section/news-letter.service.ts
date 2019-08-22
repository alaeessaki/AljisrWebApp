import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NewsLetterService {
  emailExist: boolean;
  constructor(private _http: HttpClient) { }

  sendSubscriber(subscriber) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._http.post("http://localhost:3200/api/addSubscriber", subscriber, httpOptions)
  
  }
  itExist() {
    return this.emailExist;
  }
}


