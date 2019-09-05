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
    // return this._http.post(window.location.origin+"/api/addSubscriber", subscriber, httpOptions)
    return this._http.post("api/addSubscriber", subscriber, httpOptions)
  }

  // mailsender
  sendMail(subscriber){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._http.post("api/sendSubscribtionMail", subscriber, httpOptions)
  }
  itExist() {
    return this.emailExist;
  }
}


