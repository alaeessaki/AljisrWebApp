import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuiSomeNousComponent } from './pages/qui-some-nous/qui-some-nous.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: 'QuiSommeNous', component: QuiSomeNousComponent},
  { path: 'home', component: HomePageComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [QuiSomeNousComponent,HomePageComponent];
