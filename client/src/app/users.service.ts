import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri = "http://localhost:4200/users";
  constructor(private http: HttpClient) { }

  addUser(email, username, password) {
    const obj = {
      email: email,
      username: username,
      password: password
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log("done"));
  }
  getUser() { 
    return this
            .http
            .get(`${this.uri}`); 
  }
}
