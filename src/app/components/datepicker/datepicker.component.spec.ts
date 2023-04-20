import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerComponent } from './datepicker.component';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        providers: [DateAdapter, DatePipe,],
        declarations: [
            DatepickerComponent,
            MatFormField,
            MatLabel,
            MatDatepickerToggle,
            MatHint,
            MatDatepicker
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
