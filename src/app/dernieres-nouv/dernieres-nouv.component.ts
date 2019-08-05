import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service'; 

@Component({
  selector: 'app-dernieres-nouv',
  templateUrl: './dernieres-nouv.component.html',
  styleUrls: ['./dernieres-nouv.component.scss']
})
export class DernieresNouvComponent implements OnInit {
  news: Array<any> = [];
  constructor(private _news:NewsService) {
   
   }

  ngOnInit() {
    this.news = this._news.getNews();
  }

}
