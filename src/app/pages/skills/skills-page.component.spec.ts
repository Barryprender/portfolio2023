import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPageComponent } from './skills-page.component';
import { MatCard } from '@angular/material/card';

describe('SkillsComponent', () => {
  let component: SkillsPageComponent;
  let fixture: ComponentFixture<SkillsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsPageComponent, MatCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
