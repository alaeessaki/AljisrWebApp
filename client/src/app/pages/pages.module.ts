import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { QuiSomeNousComponent } from './qui-some-nous/qui-some-nous.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriStepperComponent } from './inscription/inscri-stepper/inscri-stepper.component';
import { MotDePresidentComponent } from './mot-de-president/mot-de-president.component';
import { BibliobusComponent } from './bibliobus/bibliobus.component';
import { LearnToActComponent } from './learn-to-act/learn-to-act.component';
import { PoleEducationComponent } from './pole-education/pole-education.component';
import { PrescolairePageComponent } from './prescolaire-page/prescolaire-page.component';
import { AmalComponent } from './amal/amal.component'



@NgModule({
  declarations: [PrescolairePageComponent],
  imports: [
    CommonModule
  ],
  exports: [

  ]
})

export class PagesModule { }
