import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeToggleComponent } from './mode-toggle/mode-toggle.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarOptionComponent } from './nav-bar/nav-bar-option/nav-bar-option.component';
import { EntryComponent } from './entry/entry.component';
import { FooterComponent } from './footer/footer.component';
import {SkillComponent} from './about/skills/skill.component';
import { StyleDotsComponent } from './style-dots/style-dots.component';

@NgModule({
  declarations: [
    AppComponent,
    ModeToggleComponent,
    AboutComponent,
    ProjectsComponent,
    ExperienceComponent,
    NavBarComponent,
    NavBarOptionComponent,
    EntryComponent,
    FooterComponent,
    SkillComponent,
    StyleDotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
