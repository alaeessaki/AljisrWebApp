import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-mycarousel',
  templateUrl: './mycarousel.component.html',
  styleUrls: ['./mycarousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MycarouselComponent implements OnInit {

  images: Array<any> = [];
  constructor() {
    this.images = [
      { id: 1, name: '../../assets/educ.png', color: "rgba(52,152,219, 0.76)", title: "Education", subicon: "../../assets/book.png" },
      { id: 2, name: '../../assets/env.png', color: "rgba(25,174,118, 0.76)", title: "Environnement", subicon: "../../assets/plant.png" },
      { id: 3, name: '../../assets/inno.png', color: "rgba(103,55,131, 0.76)", title: "Innovation", subicon: "../../assets/innovation.png" },
      { id: 4, name: '../../assets/inno.png', color: "rgba(103,55,131, 0.76)", title: "Lorem", subicon: "../../assets/innovation.png" }
    ]
  }

  ngOnInit() {
    const carouselSlide: HTMLElement = document.querySelector('.wraper');
    const carouselElements = document.querySelectorAll('.wraper mat-card');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');


    let counter = 1;
    let size = carouselElements[0].clientWidth + 16;
  
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)'


    function movingSl() {
      if (counter >= carouselElements.length - 1) {
        counter = 0;
      }
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    setInterval(movingSl, 3000);

    //  btn listener 
    nextBtn.addEventListener('click', () => {
      if (counter >= carouselElements.length - 1) return;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    })
    prevBtn.addEventListener('click', () => {
      if (counter <= 0) return;
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter--;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    })
  }
}


