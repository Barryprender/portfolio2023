import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

class ActivatedRouteStub {
    snapshot = {
        paramMap: {
            get(): string {
                return 'example_value';
            }
        }
    };
}

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterOutlet],
            declarations: [AppComponent, HeaderComponent, NavComponent],
            providers: [{ provide: ActivatedRoute, useClass: ActivatedRouteStub }],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
