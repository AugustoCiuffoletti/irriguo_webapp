import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TrentoComponent } from './trento/trento.component';

@NgModule({
  declarations: [
    AppComponent,
    TrentoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
