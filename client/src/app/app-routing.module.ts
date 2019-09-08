import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuiSomeNousComponent } from './pages/qui-some-nous/qui-some-nous.component';
import { MotDePresidentComponent } from './pages/mot-de-president/mot-de-president.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { InscriStepperComponent } from './pages/inscription/inscri-stepper/inscri-stepper.component';
import { BibliobusComponent } from './pages/bibliobus/bibliobus.component';


const routes: Routes = [
  { path: 'Inscription', component: InscriptionComponent },
  { path: 'QuiSommeNous', component: QuiSomeNousComponent },
  { path: 'MotDePresident', component: MotDePresidentComponent },
  { path: 'bibliobus', component: BibliobusComponent},
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [QuiSomeNousComponent, HomePageComponent, InscriptionComponent, InscriStepperComponent, MotDePresidentComponent, BibliobusComponent] ;
