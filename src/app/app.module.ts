import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PortfolioService } from './portfolio-service.service';
import { userCardComponent } from './components/userCard/userCard.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { SharedModule } from './components/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    userCardComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
