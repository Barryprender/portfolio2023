import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UserCardComponent } from './userCard/userCard.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MainIntroComponent } from './main-intro/main-intro.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';

const COMPONENTS = [
    HeaderComponent,
    UserCardComponent,
    NavComponent,
    DatepickerComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    MainIntroComponent,
    ExperienceComponent
];

const MODULES = [
    CommonModule,
    NgbModule,
    NgbNavModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    MatDatepickerModule
]

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        ...MODULES
    ],
    exports: [
        ...COMPONENTS
    ]
})

export class SharedModule { }
