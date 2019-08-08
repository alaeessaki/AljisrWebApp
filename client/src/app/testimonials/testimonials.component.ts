import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { temoins } from '../declarations';
import { QuotesService } from './quotes.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsComponent implements OnInit {

  temoin;
  selectedItem2:temoins;
  constructor(private _quotes:QuotesService) {  }

  ngOnInit() {
    // getting temoins from services
    this._quotes.getTemoins().subscribe(data=>{
      this.temoin = data;
      this.selectedItem2 = this.temoin[0];
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
