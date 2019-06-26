import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { QuiSomeNousComponent } from './qui-some-nous/qui-some-nous.component';

@NgModule({
  declarations: [HomePageComponent, QuiSomeNousComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class PagesModule { }
