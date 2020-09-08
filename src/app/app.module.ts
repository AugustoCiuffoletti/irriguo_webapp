import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PlantselectComponent } from './plantselect/plantselect.component';
import { HistoryComponent } from './history/history.component';
import { PlantstatComponent } from './plantselect/plantstat/plantstat.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantselectComponent,
    HistoryComponent,
    PlantstatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
