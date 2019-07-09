import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-aljisr',
  templateUrl: './team-aljisr.component.html',
  styleUrls: ['./team-aljisr.component.scss']
})
export class TeamAljisrComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const carouselSlide: HTMLElement = document.querySelector('.wraper');
    const carouselElements = document.querySelectorAll('.wraper mat-card');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');


    let counter = 1;
    let size = carouselElements[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'


    function movingSl() {
      if (counter >= carouselElements.length - 1) {
        counter = 1;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
      };
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
