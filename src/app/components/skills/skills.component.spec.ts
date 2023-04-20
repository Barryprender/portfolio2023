import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let firestoreMock: any;

  beforeEach(async () => {
    firestoreMock = jasmine.createSpyObj('Firestore', ['collection', 'addDoc', 'collectionData', 'doc', 'updateDoc']);
    await TestBed.configureTestingModule({
      declarations: [ SkillsComponent ],
      providers: [
        { provide: Firestore, useValue: firestoreMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const skillsData = [
        { id: '1', skill: 'HTML' },
        { id: '2', skill: 'CSS/SCSS' },
        { id: '3', skill: 'JS' }
      ];
      const skillsObservable = of(skillsData);
       // Stub the Firestore collectionData() method to return this Observable when called
    firestoreMock.collectionData.and.returnValue(skillsObservable);
  });

  it('should get skills data when created', () => {
    expect(component.skills).toBeDefined();
    component.skills.subscribe(val => {
      expect(val.length).toBe(3);
    });
  });

});
