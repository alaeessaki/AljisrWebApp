import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { temoins } from '../declarations';
import {TemoinsService} from './temoins.service'
import { LangService } from '../lang.service'

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsComponent implements OnInit {
  language
  temoin: any;
  selectedItem2: temoins;
  title = {
    "en": "temoins",
    "fr": "témoignage"
  };
  constructor(private _temoinsService: TemoinsService, private _langService:LangService) { }

  ngOnInit() {

    this.language = this._langService.getLanguage();

    // getting temoins from services
    this._temoinsService.getTemoins().subscribe(data => {
      this.temoin = data
      this.selectedItem2 = data[0];
      this.changeX((this.temoin.length));
    });


  }

  onSelected(item: temoins): void {
    this.selectedItem2 = item;
  }

  // rect liner change
  changeX(id) {
    var rectem = document.getElementById("rect-testi");
    rectem.style.transition = "left 1s";
    rectem.style.left = +id * 10 + 35 + "px";
  }

}
