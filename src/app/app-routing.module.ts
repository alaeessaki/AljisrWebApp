import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuisommenousComponent } from './quisommenous/quisommenous.component';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  { path: 'QuiSommeNous', component: QuisommenousComponent},
  { path: 'home', component: HomePageComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [QuisommenousComponent,HomePageComponent];
