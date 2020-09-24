import { Component, OnInit, EventEmitter, Output, SimpleChanges, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// TODO, make nav a vertical left side bar that can expand/collapse
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnChanges {
  @Output('beforeNavigate') beforeNavigate = new EventEmitter<string>();

  path: string;
  businessId = 0;

  constructor(private router: Router, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.businessId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.path = this.location.path().replace(/\//g, '').replace(/\d/g, '');
    if (!this.path) {
      this.router.navigate([`services/${this.businessId}`]);
    }
  }

  selectPage(page) {
    if (this.beforeNavigate.observers.length > 0) {
      this.beforeNavigate.emit(page);
    } else {
      // Skip beforeNavigate action
      this.router.navigate([`${page}/${this.businessId}`]);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
