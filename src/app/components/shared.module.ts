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

const COMPONENTS = [
  HeaderComponent,
  UserCardComponent,
  NavComponent,
  DatepickerComponent
];

@NgModule({
  declarations: [
   ...COMPONENTS,
   MainIntroComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbNavModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    MatDatepickerModule
  ],
  exports: [
    ...COMPONENTS,
    MainIntroComponent,
  ]
})

export class SharedModule { }
