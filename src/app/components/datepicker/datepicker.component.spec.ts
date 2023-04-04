import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerComponent } from './datepicker.component';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerComponent, MatFormField, MatLabel, MatDatepickerToggle, MatHint, MatDatepicker  ]
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
