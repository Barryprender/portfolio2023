import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/components/shared.module';
import { AboutComponent } from './about.component';
import { MatCard } from '@angular/material/card';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let sharedModule: SharedModule;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent, MatCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
