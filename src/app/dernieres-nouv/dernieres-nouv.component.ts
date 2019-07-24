import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dernieres-nouv',
  templateUrl: './dernieres-nouv.component.html',
  styleUrls: ['./dernieres-nouv.component.scss']
})
export class DernieresNouvComponent implements OnInit {
  news: Array<any> = [];
  constructor() {
    this.news = [
      {id:1, title:"finished cv jetni project",img:"../../assets/dernieres-nouvelles/Pic1-full.png", description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime sint rerum nihil, eaque vitae est sed aspernatur consequatur officia laudantium dolor, alias nemo obcaecati nisi minima excepturi, exercitationem architecto? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime sint rerum nihil, eaque vitae est sed aspernatur" },

      {id:2, title:"finished cv jetni project",img:"../../assets/dernieres-nouvelles/pic2-full.png",  description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime sint rerum nihil, eaque vitae est sed aspernatur consequatur officia laudantium dolor, alias nemo obcaecati nisi minima excepturi, exercitationem architecto? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime sint rerum nihil, eaque vitae est sed aspernatur "}
    ]
   }

  ngOnInit() {
  }

}
