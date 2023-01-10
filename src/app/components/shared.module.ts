import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { userCardComponent } from './userCard/userCard.component';

@NgModule({
  declarations: [
    HeaderComponent,
    userCardComponent,
    NavComponent

  ],
  imports: [
    NgbNavModule,
    CommonModule,
    NgbModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    userCardComponent
  ]
})

export class SharedModule { }
