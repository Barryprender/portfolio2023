import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MatCard } from '@angular/material/card';
import { MainIntroComponent } from 'src/app/components/main-intro/main-intro.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { Firestore, collectionData } from '@angular/fire/firestore';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [{ provide: Firestore, useValue: { collectionData } }],
            declarations: [HomeComponent, MatCard, MainIntroComponent, SkillsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
