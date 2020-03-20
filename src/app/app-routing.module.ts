import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PaysComponent } from './pays/pays.component';

const routes: Routes = [
	//{path:'Canada',component:CanadaPaysComponent},
	//{path:'Australie',component:AustraliePaysComponent}
{ path: 'pays/:name', component: PaysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
