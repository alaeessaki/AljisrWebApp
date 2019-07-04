import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  isClicked = false;
  clicked(){
    if(this.isClicked){
      this.isClicked = false;
    }
    else{
      this.isClicked = true;
    }
  }
}
