import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  path: string;

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.path = this.location.path().replace('/', '');
    if (!this.path) {
      this.path = 'services';
    }

  }

  modifyServices() {
    this.router.navigate(['services']);
  }

  modifyBusiness() {
    this.router.navigate(['business']);
  }

}
