import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../components/shared.module';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../material.module';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialModule,
    NgbNavModule
    ]
})
export class PagesModule { }
