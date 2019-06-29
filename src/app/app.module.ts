import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './materials';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { MycarouselComponent } from './mycarousel/mycarousel.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CounterUpSectionComponent } from './counter-up-section/counter-up-section.component';
// pages module



@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    CarouselComponent,
    MycarouselComponent,
    CounterUpSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule.forRoot(),
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
