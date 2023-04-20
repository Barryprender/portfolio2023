import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    public active = 1;
    public activeLink!: string;

    constructor(
        public router: Router,
        public route: ActivatedRoute,
    ) { }

    public homeLink() {
        this.router.navigate(['/home']);
    }
    public aboutLink() {
        this.router.navigate(['/about']);
    }

    ngOnInit(): void {
    }
}
