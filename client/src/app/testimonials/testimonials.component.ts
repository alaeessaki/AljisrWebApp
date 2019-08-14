import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { temoins } from '../declarations';
import { HomePageService } from '../pages/home-page/home-page.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsComponent implements OnInit {

  temoin:Array<any>;
  selectedItem2:temoins;
  title:string;
  constructor(private _homePage:HomePageService) {  }

  ngOnInit() {
    // getting temoins from services
    this._homePage.getdata().subscribe(data=>{
      this.temoin = data[0].temoinSection.temoins;
      this.title = data[0].temoinSection.title;
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
