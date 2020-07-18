import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// TODO, make nav a vertical left side bar that can expand/collapse
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  path: string;
  changePath = new EventEmitter();
  businessId = 0;

  constructor(private router: Router, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.businessId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.path = this.location.path().replace(/\//g, '').replace(/\d/g, '');
    if (!this.path) {
      this.router.navigate([`services/${this.businessId}`]);
    }
  }

  modifyServices() {
    this.changePath.emit();
    this.router.navigate([`services/${this.businessId}`]);
  }

  modifyBusiness() {
    this.changePath.emit();
    this.router.navigate([`business/${this.businessId}`]);
  }
}
