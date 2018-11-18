import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeToggleComponent } from './mode-toggle/mode-toggle.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarOptionComponent } from './nav-bar/nav-bar-option/nav-bar-option.component';
import {ParticlesModule} from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent,
    ModeToggleComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    NavBarComponent,
    NavBarOptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
