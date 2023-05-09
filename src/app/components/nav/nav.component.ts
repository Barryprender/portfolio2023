import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    public active = 1;
    public navOpen = false;
    public activeLink!: string;
    public menuString: string = 'menu';
    private mobileScreen: boolean = false;

    constructor(
        private breakpointObserver: BreakpointObserver,
        public router: Router,
        public route: ActivatedRoute,
    ) {
        // detect screen size changes
        this.breakpointObserver.observe([
            "(max-width: 768px)"
        ]).subscribe((result: BreakpointState) => {
            if (result.matches) {
                this.mobileScreen = true;
            } else {
                this.mobileScreen = false;
            }
        });
    }

    toggleMobileNav() {
        if(this.mobileScreen) {
            this.navOpen = !this.navOpen;
            if (this.menuString === 'menu_open') {
                this.menuString = 'menu'
            } else {
                this.menuString = 'menu_open';
            }
        }
    }

    ngOnInit(): void {
    }

}
