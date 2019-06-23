import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './materials';
import { HomePageComponent } from './home-page/home-page.component';
import { QuisommenousComponent } from './quisommenous/quisommenous.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    QuisommenousComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
