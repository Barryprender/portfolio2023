import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public active = 1;
  public menuState: boolean = false;
  // public fragment = this.Fragment

  public MenuButton(){
    this.menuState = !this.menuState;
  };

  links = [
    { title: 'home', fragment: 'home', path: 'home' },
    { title: 'about', fragment: 'about', path: 'about' },
    { title: 'skills', fragment: 'skills', path: 'skills' },
    { title: 'contact', fragment: 'contact', path: 'contact' }
  ];

  constructor (
    public route: ActivatedRoute,
    // public Fragment: NgbNavModule
    ) {
      // Fragment = this.fragment;
      this.route.params.subscribe(params => {
        console.log(params);
      });
  }


}
