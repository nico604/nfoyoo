import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { MapComponent } from './map/map.component';
import { OrganismService } from 'src/app/organism.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { OrganismListComponent } from './organism-list/organism-list.component';
import { PaysComponent } from './pays/pays.component';
import { WorldComponent } from './world/world.component';


@NgModule({
  declarations: [
    MapComponent,
    AppComponent,
    OrganismListComponent,
    PaysComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule
  ],
  providers: [OrganismService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
