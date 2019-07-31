import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuiSomeNousComponent } from './pages/qui-some-nous/qui-some-nous.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { InscriStepperComponent } from './pages/inscription/inscri-stepper/inscri-stepper.component';
import {ContactlistComponent} from './contactlist/contactlist.component';

const routes: Routes = [
  { path: 'Inscription', component: InscriptionComponent },
  { path: 'QuiSommeNous', component: QuiSomeNousComponent },
  { path: 'contacts', component: ContactlistComponent },
  // { path: 'home', component: HomePageComponent },
  { path: '', component: HomePageComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [QuiSomeNousComponent, HomePageComponent, InscriptionComponent, InscriStepperComponent, ContactlistComponent];
