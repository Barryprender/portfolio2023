import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { SharedModule } from './components/shared.module';
import { PagesModule } from './pages/pages.module';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { SkillsService } from './services/skills-service.service';
import { ExperienceService } from './services/experience-service.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    PagesModule,
    NgbModule,
    NgbNavModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    UserService,
    SkillsService,
    ExperienceService,
    DatePipe
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
