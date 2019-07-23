import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isClicked = false;
  clicked() {
    if (this.isClicked) {
      this.isClicked = false;
    }
    else {
      this.isClicked = true;
    }
  }

}
