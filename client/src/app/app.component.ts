import { Component } from '@angular/core';
import { menu } from './declarations';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'aljisrwebapplication';
  itsHome = false;
  searchIsOpen = false;

  constructor(private _loadingBar: SlimLoadingBarService, private _router: Router, private _cookieSercive: CookieService) {

    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });

    this._router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          if (this._router.url == "/home" || this._router.url == "/") {
            this.isHome();
          }
          else {
            this.isHomeNt();
          }

        }
      }
    );
  }

  isHome() {
    this.itsHome = true;
  }

  isHomeNt() {
    this.itsHome = false;
  }

  ngOnInit() {
    // setting default language
    if (this._cookieSercive.check("language") == false) {
      this._cookieSercive.set('language', "fr");
    }

    $('img').on("load", function () {
      setTimeout(() => { $(".splash-wrapper").fadeOut("slow") }, 1500);
    });

    console.log('Hi 👌 | Made With the power of Memes by Alae, Khalil and Anas')
    console.log('What did it cost?');
    console.log('everything ! 😔')
  }

  searchToggle() {
    let searchbar = document.querySelector('.searchCont');
    let screenWidth = window.innerWidth;
    let logo = document.querySelector('.logo');
    if (!this.searchIsOpen) {
      if (screenWidth < 1050) {
        (<any>logo).style = "opacity:0";
      }
      (<any>searchbar).style = "opacity:1;width:250px";
      this.searchIsOpen = true;
    }
    else {
      if (screenWidth < 1050) {
        setTimeout(() => { (<any>logo).style = "opacity:1" }, 200)
      }
      (<any>searchbar).style = "width:0px; opacity:0";
      this.searchIsOpen = false;
    }
  }

  // Loading bar
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }



  // menu data
  Menu: menu[] = [
    {
      title: {
        name: 'Aljisr',
        link: '#'
      },
      subtitle: [
        {
          name: 'Qui somme nous?',
          link: 'QuiSommeNous',
          href: false
        },
        {
          name: "Mot du président",
          link: 'MotDePresident',
          href: false
        },
        {
          name: 'Notre Structure',
          link: '#',
          href: false
        },
        {
          name: 'Rapport Annuelle',
          link: 'https://en.calameo.com/read/0051166192bf1dac4dcfe',
          href: true
        },
      ]
    },
    {
      title: {
        name: 'Education',
        link: '#'
      },
      subtitle: [
        {
          name: 'Presentation (2020)',
          link: 'Education',
          href: false
        },
        {
          name: 'Projects LTA',
          link: 'learnToAct',
          href: false
        },
        {
          name: 'Amale',
          link: 'ProjetAmale',
          href: false
        },
        {
          name: 'Bibliothéque de classe(2022)',
          link: 'bibliothequeDeClasse',
          href: false
        },
        {
          name: 'Bibiliobus',
          link: 'bibliobus',
          href: false
        },
        {
          name: 'Journée solidaire',
          link: 'journéeSolidaire',
          href: false
        },
        {
          name: 'Le programme de préscolaire oeuvre',
          link: 'ProgrammePrescolaire',
          href: false
        },

      ]
    },
    {
      title: {
        name: 'Formation',
        link: '#'
      },
      subtitle: [
        {
          name: 'Presentation',
          link: 'formation',
          href: false
        },
        {
          name: 'Greenchip (2021)',
          link: 'greenchip',
          href: false
        },
        {
          name: 'Greenchip 2.0',
          link: '#',
          href: false
        },
        {
          name: 'Centre de la deuxiéme chance',
          link: 'c2c',
          href: false
        },
        {
          name: 'Digi-bus',
          link: '#',
          href: false
        },
      ]
    },
    {
      title: {
        name: 'Innovation et transfert des compétences',
        link: '#'
      },
      subtitle: [
      ]
    },
    {
      title: {
        name: 'Mediatheque',
        link: '#'
      },
      subtitle: [
        {
          name: 'Articles de presse',
          link: '#',
          href: false
        },
        {
          name: 'Capsules vidéos',
          link: '#',
          href: false
        }
      ]
    },
    {
      title: {
        name: 'Contact',
        link: 'contact'
      },
      subtitle: [
      ]
    },
  ];

}
