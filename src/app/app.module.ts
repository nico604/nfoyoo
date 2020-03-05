import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CanadaPaysComponent } from './canada-pays/canada-pays.component';
import { AustraliePaysComponent } from './australie-pays/australie-pays.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    CanadaPaysComponent,
    AustraliePaysComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
