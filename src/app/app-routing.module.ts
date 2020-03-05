import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanadaPaysComponent } from './canada-pays/canada-pays.component';
import { AustraliePaysComponent } from './australie-pays/australie-pays.component';
import { MondeComponent } from './monde/monde.component';

const routes: Routes = [
	{path:'', component:MondeComponent},
	{path:'Canada',component:CanadaPaysComponent},
	{path:'Australie',component:AustraliePaysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
