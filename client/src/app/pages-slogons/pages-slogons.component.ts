import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pages-slogons',
  templateUrl: './pages-slogons.component.html',
  styleUrls: ['./pages-slogons.component.scss']
})
export class PagesSlogonsComponent implements OnInit {

  @Input() slogons;
  selectedItem;
  i = 0;
  constructor() { }

  ngOnInit() {
     // init the first slogon
     this.selectedItem = this.slogons[0];

     let slogonssection = document.querySelector('.hero-flag');
     let _this = this;
 
     // the loop function that change the slogon
     function loopInSlogons() {
       _this.change(_this.slogons[_this.i]);
       _this.i++;
       if (_this.i == _this.slogons.length) {
         _this.i = 0
       }
     }
 
     // init the loop interval so that will work in one of the two cases
     let slogonsCarousel = setInterval(loopInSlogons, 2000);
 
     // stoping the carousel
     slogonssection.addEventListener('mouseenter', function test() {
       clearInterval(slogonsCarousel);
     });
 
     // the actual loop
     slogonssection.addEventListener('mouseleave', function toto() {
       slogonsCarousel = setInterval(loopInSlogons, 2000);
     });
  }
   // the change function that change to selected slogan 
   change(slogon) {
    this.selectedItem = slogon;
  }

}
