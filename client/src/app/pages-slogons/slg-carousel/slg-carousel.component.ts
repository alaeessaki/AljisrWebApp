import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slg-carousel',
  templateUrl: './slg-carousel.component.html',
  styleUrls: ['./slg-carousel.component.scss']
})
export class SlgCarouselComponent implements OnInit {
  @Input() selectedItem;
  constructor() { }

  ngOnInit() {
  }

}
