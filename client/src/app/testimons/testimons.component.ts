import { Component, OnInit, Input } from '@angular/core';
import { temoins } from '../declarations';


@Component({
  selector: 'app-testimons',
  templateUrl: './testimons.component.html',
  styleUrls: ['./testimons.component.scss']
})
export class TestimonsComponent implements OnInit {
  @Input() temo: temoins;
  constructor() { }

  ngOnInit() {
  }

}
