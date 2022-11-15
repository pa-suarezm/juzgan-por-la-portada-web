import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialFormComponent } from './InitialForm/initial-form/initial-form.component';
import { LandingComponent } from './Landing/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialFormComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
