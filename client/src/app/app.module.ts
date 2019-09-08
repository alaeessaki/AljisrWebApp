import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials';
import { ReactiveFormsModule } from '@angular/forms';

// ngx components
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// components
import { CarouselComponent } from './carousel/carousel.component';
import { CounterUpSectionComponent } from './counter-up-section/counter-up-section.component';
import { DernieresNouvComponent } from './dernieres-nouv/dernieres-nouv.component';
import { EventsComponent } from './events/events.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { TestimonialsComponent } from './testimonials/testimonials.component'
import { AljisrPlatformsComponent } from './aljisr-platforms/aljisr-platforms.component';
import { NewsletterSectionComponent } from './newsletter-section/newsletter-section.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { TeamAljisrComponent } from './team-aljisr/team-aljisr.component';
import { QueSoutenonsNousComponent } from './que-soutenons-nous/que-soutenons-nous.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TestimonsComponent } from './testimons/testimons.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { InscriStepperComponent } from './pages/inscription/inscri-stepper/inscri-stepper.component';
import { BibliobusComponent } from './pages/bibliobus/bibliobus.component';



import { LoginComponent } from './login/login.component';


import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { MatNativeDateModule } from '@angular/material';
import { IlNousSoutiennentComponent } from './il-nous-soutiennent/il-nous-soutiennent.component';
import { CheckCardComponent } from './check-card/check-card.component';
import { TrophiesBinderComponent } from './trophies/trophies-binder.component';
import { TrophieDetailsComponent } from './trophie-details/trophie-details.component';
import { TrophiesPicsComponent } from './trophies-pics/trophies-pics.component';

// httpClient
import { HttpClientModule } from '@angular/common/http';

// services 
import { BenevolerComponent } from './benevoler/benevoler.component';
import { CookieService } from 'ngx-cookie-service';
import { RoutingLoadingScreenComponent } from './routing-loading-screen/routing-loading-screen.component';
import { PagesSlogonsComponent } from './pages-slogons/pages-slogons.component';
import { SlgCarouselComponent } from './pages-slogons/slg-carousel/slg-carousel.component';






@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    routingComponent,
    CarouselComponent,
    CounterUpSectionComponent,
    DernieresNouvComponent,
    EventsDetailsComponent,
    EventsComponent,
    TestimonialsComponent,
    AljisrPlatformsComponent,
    NewsletterSectionComponent,
    SearchComponent,
    FooterComponent,
    TeamAljisrComponent,
    QueSoutenonsNousComponent,
    HeroSectionComponent,
    TestimonsComponent,
    InscriptionComponent,
    InscriStepperComponent,
    LoginComponent,
    SplashScreenComponent,
    IlNousSoutiennentComponent,
    CheckCardComponent,
    TrophiesBinderComponent,
    TrophieDetailsComponent,
    TrophiesPicsComponent,
    BenevolerComponent,
    RoutingLoadingScreenComponent,
    PagesSlogonsComponent,
    SlgCarouselComponent,
    BibliobusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    SlimLoadingBarModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [MatNativeDateModule, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
