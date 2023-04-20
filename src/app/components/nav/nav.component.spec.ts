import { ComponentFixture, TestBed } from '@angular/core/testing';
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

    it('should navigate to home when home link is clicked', () => {
        const homeLink = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))[0];
        const href = homeLink.nativeElement.getAttribute('href');
        expect(href).toEqual('/home');
        homeLink.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.router.url).toBe('/home');
        debugger
      });

      it('should navigate to about when about link is clicked', () => {
        const aboutLink = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))[1];
        const href = aboutLink.nativeElement.getAttribute('href');
        expect(href).toEqual('/about');
        aboutLink.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.router.url).toBe('/about');
        debugger
      });

    it('should navigate to the correct routes when the links are clicked', () => {
        const router = TestBed.inject(Router);
        const routerSpy = spyOn(router, 'navigate');
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
