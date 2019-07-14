import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { temoins } from '../declarations';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsComponent implements OnInit {


  temoins: Array<any>;

  constructor() {


  }

  ngOnInit() {
  }
  temoin: temoins[] = [
    { id: 1, src: "https://www.skdemarketing.com/wp-content/uploads/2018/08/neil-mclaughlin-lrg.jpg", alt: "temoin1", testimon: "temoi 33 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto dolor cumque consectetur expedita, repellat commodi molestias velit ipsam ex quisquam dicta necessitatibus incidunt optio laborum possimus. Animi, eos quisquam.", profile: "Lorem Ipsum" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjVWkqITmde1FKLic1qTh1-ubHRrIx_Xi91zmcWqK4ltFuMCM6", alt: "temoin2", testimon: "temoi 22 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto dolor cumque consectetur expedita, repellat commodi molestias velit ipsam ex quisquam dicta necessitatibus incidunt optio laborum possimus. Animi, eos quisquam.", profile: "Ipsum Lor" },
    { id: 3, src: "https://divisupreme.com/wp-content/uploads/2018/11/dsm-testimonial-2.jpg", alt: "temoin3", testimon: "temoi 88 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto dolor cumque consectetur expedita, repellat commodi molestias velit ipsam ex quisquam dicta necessitatibus incidunt optio laborum possimus. Animi, eos quisquam.", profile: "Lo Ips" },
    { id: 4, src: "https://www.skdemarketing.com/wp-content/uploads/2018/08/corporate_profile_executive_index_img_33.jpg", alt: "temoin4", testimon: "temoi 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto dolor cumque consectetur expedita, repellat commodi molestias velit ipsam ex quisquam dicta necessitatibus incidunt optio laborum possimus. Animi, eos quisquam.", profile: "Dolor lore" }
  ]

  firstTemo: temoins = this.temoin[0];
  temo: temoins;
  witness: temoins;
  selectedItem: temoins;
  onSelected(item: temoins): void {
    this.selectedItem = item;
    delete this.firstTemo;
  }

}
