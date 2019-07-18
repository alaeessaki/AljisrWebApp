import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { QuiSomeNousComponent } from './qui-some-nous/qui-some-nous.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriStepperComponent } from './inscription/inscri-stepper/inscri-stepper.component';

@NgModule({
  declarations: [HomePageComponent, QuiSomeNousComponent, InscriptionComponent, InscriStepperComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class PagesModule { }
