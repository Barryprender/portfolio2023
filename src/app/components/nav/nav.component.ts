import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    @Input() routerLink!: boolean;
    public active = 1;
    public activeLink!: string;

    constructor (
        public router: Router,
        public route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
    }
}
