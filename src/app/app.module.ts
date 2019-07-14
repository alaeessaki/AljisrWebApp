import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { MycarouselComponent } from './mycarousel/mycarousel.component';
import { CounterUpSectionComponent } from './counter-up-section/counter-up-section.component';
import { DernieresNouvComponent } from './dernieres-nouv/dernieres-nouv.component';
import { EventsComponent } from './events/events.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { TestimonialsComponent } from './testimonials/testimonials.component'
import { CountUpModule } from 'countup.js-angular2';
import { AljisrPlatformsComponent } from './aljisr-platforms/aljisr-platforms.component';
import { NewsletterSectionComponent } from './newsletter-section/newsletter-section.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { TeamAljisrComponent } from './team-aljisr/team-aljisr.component';
import { QueSoutenonsNousComponent } from './que-soutenons-nous/que-soutenons-nous.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TestimonsComponent } from './testimons/testimons.component';

// pages module



@NgModule({
  declarations: [
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
    TestimonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule.forRoot(),
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
