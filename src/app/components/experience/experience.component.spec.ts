import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { ExperienceModel } from 'src/app/models/experienceModel.model';
import { By } from '@angular/platform-browser';
import { ExperienceService } from 'src/app/services/experience-service.service';
import { BehaviorSubject } from 'rxjs';
import { MatCard } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  let experienceService: ExperienceService;

  beforeEach(async () => {
    // stub ExperienceService to provide test data
    const experienceStub = {
      currentListExperienceData: new BehaviorSubject<Array<ExperienceModel>>([
        // provide sample data for testing
        {  title: 'Test Experience 1',
            description: 'This is test experience 1',
            link: 'example.com',
            finishDate: '01/11/1220',
            startDate: '01/11/1220',
            position: '',
            skills: ['sdf', 'sdfsad'],
            actual: false,
         },
      ]),
    };

    await TestBed.configureTestingModule({
      declarations: [ ExperienceComponent, MatCard ],
      providers: [ { provide: ExperienceService, useValue: experienceStub }, HttpClient ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    experienceService = TestBed.inject(ExperienceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display experiences', () => {
    const cardElements = fixture.debugElement.queryAll(By.css('.experiences'));
    expect(cardElements.length).toEqual(component.experiences.length);
  });
});
