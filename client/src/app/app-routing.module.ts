import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { QuiSomeNousComponent } from './pages/qui-some-nous/qui-some-nous.component';
import { MotDePresidentComponent } from './pages/mot-de-president/mot-de-president.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { InscriStepperComponent } from './pages/inscription/inscri-stepper/inscri-stepper.component';
import { PoleEducationComponent } from './pages/pole-education/pole-education.component';
import { BibliobusComponent } from './pages/bibliobus/bibliobus.component';
import { LearnToActComponent } from './pages/learn-to-act/learn-to-act.component';
import { PrescolairePageComponent } from './pages/prescolaire-page/prescolaire-page.component';
import { BibliothequeDeClasseComponent } from './pages/bibliotheque-de-classe/bibliotheque-de-classe.component'
import { AmalComponent } from './pages/amal/amal.component';
import { C2cComponent } from './pages/c2c/c2c.component';
import { JourneesSolidairesComponent } from './pages/journees-solidaires/journees-solidaires.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormationComponent } from './pages/formation/formation.component';



const routes: Routes = [
  { path: 'ProgrammePrescolaire', component: PrescolairePageComponent },
  { path: 'Education', component: PoleEducationComponent },
  { path: 'Inscription', component: InscriptionComponent },
  { path: 'QuiSommeNous', component: QuiSomeNousComponent },
  { path: 'MotDePresident', component: MotDePresidentComponent },
  { path: 'bibliobus', component: BibliobusComponent },
  { path: 'learnToAct', component: LearnToActComponent },
  { path: 'bibliothequeDeClasse', component: BibliothequeDeClasseComponent },
  { path: 'ProjetAmale', component: AmalComponent },
  { path: 'c2c', component: C2cComponent },
  { path: 'journéeSolidaire', component: JourneesSolidairesComponent},
  { path: 'formation', component: FormationComponent},
  { path: 'contact', component: ContactComponent},





  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  QuiSomeNousComponent,
  HomePageComponent,
  InscriptionComponent,
  InscriStepperComponent,
  MotDePresidentComponent,
  BibliobusComponent,
  LearnToActComponent,
  PoleEducationComponent,
  AmalComponent,
  C2cComponent,
  JourneesSolidairesComponent,
  ContactComponent,
  PrescolairePageComponent,
  FormationComponent
];
