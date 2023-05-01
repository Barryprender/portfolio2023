import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

const COMPONENTS = [
    HeaderComponent,
    NavComponent,
    DatepickerComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    MainIntroComponent,
    ExperienceComponent,
];

const MODULES = [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    MatDatepickerModule,
    NgxSkeletonLoaderModule.forRoot()
]

@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        ...MODULES,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
    ],
    exports: [
        ...COMPONENTS
    ]
})

export class SharedModule { }
