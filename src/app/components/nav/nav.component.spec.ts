import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { SkillsPageComponent } from 'src/app/pages/skills/skills-page.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { Router, RouterLinkWithHref, RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([
                    { path: 'home', component: HomeComponent },
                    { path: 'skills', component: SkillsPageComponent },
                    { path: 'about', component: AboutComponent },
                    { path: 'contact', component: ContactComponent }
                ]),
                RouterModule],
            declarations: [
                NavComponent,
                HomeComponent,
                SkillsPageComponent,
                AboutComponent,
                ContactComponent
            ],
            providers: [
                { provide: Router }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should display the links', () => {
        const links = fixture.nativeElement.querySelectorAll('.link');
        expect(links.length).toBe(4);
        expect(links[0].textContent).toContain('Home');
        expect(links[1].textContent).toContain('About');
        expect(links[2].textContent).toContain('Skills');
        expect(links[3].textContent).toContain('Contact');
    });

    it('should navigate to the correct routes when the links are clicked', () => {
        const links = fixture.nativeElement.querySelectorAll('a[href]');

        links[0].click();
        expect(links[0].getAttribute('href')).toEqual('/home');

        links[1].click();
        expect(links[1].getAttribute('href')).toEqual('/about');

        links[2].click();
        expect(links[2].getAttribute('href')).toEqual('/skills');

        links[3].click();
        expect(links[3].getAttribute('href')).toEqual('/contact');
    });
});
