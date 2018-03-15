import { DCComponent } from './dc/dc.component';
import { SeattleComponent } from './seattle/seattle.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dc',component: DCComponent },
  { path: 'seattle',component: SeattleComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: '', pathMatch: 'full', redirectTo: '/' },
  // { path: '**', component: '/PageNotFoundComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }