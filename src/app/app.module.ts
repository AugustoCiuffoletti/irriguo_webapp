import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TrentoComponent } from './trento/trento.component';
import { PlantselectComponent } from './plantselect/plantselect.component';

@NgModule({
  declarations: [
    AppComponent,
    TrentoComponent,
    PlantselectComponent
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
