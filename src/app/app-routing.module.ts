import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PaysComponent } from './pays/pays.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
	//{path:'Canada',component:CanadaPaysComponent},
{path:'',component: WorldComponent},
{ path: 'pays/:name', component: PaysComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
