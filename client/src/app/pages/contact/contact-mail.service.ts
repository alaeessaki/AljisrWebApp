import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactMailService {

  constructor(private _http: HttpClient) { }


  // mailsender
  sendMail(sender){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this._http.post("api/sendContactMail", sender, httpOptions)
  }
}
