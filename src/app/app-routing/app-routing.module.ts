import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PomodoroAppComponent} from "../pomodoro-app/pomodoro-app.component";
import {HomeComponent} from "../home/home.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'app', component: PomodoroAppComponent,},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
