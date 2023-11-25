import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../components/shared.module';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../material.module';
import { ContactComponent } from './contact/contact.component';
import { SkillsPageComponent } from './skills/skills-page.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ExperiencePageComponent } from './experience/experience-page.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SkillsPageComponent,
    ExperiencePageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    ]
})
export class PagesModule { }
