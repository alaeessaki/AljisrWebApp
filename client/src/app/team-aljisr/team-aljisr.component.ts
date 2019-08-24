import { Component, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
import { TeamAljisrService } from './team-aljisr.service';

@Component({
  selector: 'app-team-aljisr',
  templateUrl: './team-aljisr.component.html',
  styleUrls: ['./team-aljisr.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeamAljisrComponent implements AfterViewInit {
  members: Array<any>;

  constructor(private _teamAljisr: TeamAljisrService) {


  }

  ngOnInit() {
    this.members = this._teamAljisr.getTeamMembers();

  }

  carousel() {
    const carouselSlide: HTMLElement = document.querySelector('.wrapper');
    const carouselElements = document.querySelectorAll('.member');
    const breakingCarousel: HTMLElement = document.querySelector('#stopping-carousel');
    const prevBtn = document.querySelector('#prevmem');
    const nextBtn = document.querySelector('#nextmem');

    const teamImgs = document.querySelectorAll('.team-img');
    const teamCards = document.querySelectorAll('.card-profile');



    let counter = 1;
    let size = carouselElements[0].clientWidth + 20;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    function movingSl() {
      if (counter >= carouselElements.length - 1) {
        counter = -1;
      }

      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }


    var DaCarousel = setInterval(movingSl, 2000);

    // stoping the carousel

    breakingCarousel.addEventListener('mouseenter', function test() {
      clearInterval(DaCarousel);
    });


    breakingCarousel.addEventListener('mouseleave', function toto() {
      DaCarousel = setInterval(movingSl, 2000);
    });



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

    // showing the team !!

    teamImgs.forEach(el => {
      el.addEventListener('mousedown', () => {
        (<any>el).style.zIndex = "-1";
      });
    });

    teamCards.forEach(e => {
      e.addEventListener('click', () => {
        teamImgs.forEach(elem => {
          (<any>elem).style.zIndex = "1";
        })
      });
    });

  }

  ngAfterViewInit() {
    this.carousel();
  }

}
