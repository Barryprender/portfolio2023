import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { UserCardComponent } from './userCard/userCard.component';
import { NavComponent } from './nav/nav.component';

const COMPONENTS = [
  HeaderComponent,
  UserCardComponent,
  NavComponent
];

@NgModule({
  declarations: [
   ...COMPONENTS
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbNavModule,
    MaterialModule,
  ],
  exports: [
    ...COMPONENTS
  ]
})

export class SharedModule { }
