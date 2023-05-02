import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

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

    constructor(
        public router: Router,
        public route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
    }

    toggleMobileNav(){
        this.navOpen = !this.navOpen;

        if (this.menuString === 'menu_open'){
            this.menuString = 'menu'
        } else {
            this.menuString = 'menu_open';
        }
    }
}
