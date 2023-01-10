import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,

  ],
  imports: [
    NavComponent,
    CommonModule,
    NgbModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    NavComponent
  ]
})

export class SharedModule { }
