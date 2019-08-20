import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  public language:string;
  constructor(private _cookieSercive: CookieService) {
    this.language = _cookieSercive.get('language');
   }

  setLanguage(lang:string){
    this._cookieSercive.set('language', lang);
    this.language = this._cookieSercive.get('language');

    // backup plan
    if(this._cookieSercive.check("language") == false){
      this.language = "fr"
    }
    console.log(this.language)
  }
  getLanguage(){
    return this.language;
  }
}
