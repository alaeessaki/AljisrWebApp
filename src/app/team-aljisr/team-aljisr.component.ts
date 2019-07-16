import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-team-aljisr',
  templateUrl: './team-aljisr.component.html',
  styleUrls: ['./team-aljisr.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeamAljisrComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const carouselSlide: HTMLElement = document.querySelector('.wrapper');
    const carouselElements = document.querySelectorAll('.member');
    const prevBtn = document.querySelector('#prevmem');
    const nextBtn = document.querySelector('#nextmem');


    let counter = 1;
    let size = carouselElements[0].clientWidth + 24;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'


    function movingSl() {


      if (counter >= carouselElements.length - 1) {
        counter = -1;
      }
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    // setInterval(movingSl, 2000);

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
