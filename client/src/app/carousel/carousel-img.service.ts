import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarouselImgService {

  constructor(private http: HttpClient) { }

  getImgs(){
    return this.http.get(window.location.origin+'/api/heroSectionImgs');
  }
}
