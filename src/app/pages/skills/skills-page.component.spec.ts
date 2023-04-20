import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsPageComponent } from './skills-page.component';
import { MatCard } from '@angular/material/card';
import { SkillsComponent } from 'src/app/components/skills/skills.component';

describe('SkillsPagesComponent', () => {
    let component: SkillsPageComponent;
    let fixture: ComponentFixture<SkillsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SkillsPageComponent, MatCard, SkillsComponent]
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
