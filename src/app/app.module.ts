import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PomodoroAppComponent } from './pomodoro-app/pomodoro-app.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PomodoroAppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
