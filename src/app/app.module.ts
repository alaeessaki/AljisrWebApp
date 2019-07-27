import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';


// ngx components
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// components
import { CarouselComponent } from './carousel/carousel.component';
import { MycarouselComponent } from './mycarousel/mycarousel.component';
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

import { LoginComponent } from './login/login.component';


import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { MatNativeDateModule } from '@angular/material';
import { IlNousSoutiennentComponent } from './il-nous-soutiennent/il-nous-soutiennent.component';
import { CheckCardComponent } from './check-card/check-card.component';


// httpClient
import {HttpClientModule} from '@angular/common/http';

// services 
import {UsersService} from './users.service';






@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    routingComponent,
    CarouselComponent,
    MycarouselComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    SlimLoadingBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule

  ],
  providers: [MatNativeDateModule, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
