import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { BusinessService } from '../entities/business.service';
import { BusinessVM } from '../entities/business';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  business = new BusinessVM();
  ownerImage: SafeUrl;
  homeLogo: SafeUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private businessService: BusinessService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.snackBar.open('Contacting server ...');
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.businessService.get(id)
      .pipe(
        catchError((error, caught) => {
          this.snackBar.open('Failed to load user data :(', '', {
            duration: 3000
          });
          return of(null);
        })
      ).subscribe((business: BusinessVM) => {
        if (business) {
          this.business = business;
          this.snackBar.dismiss();
        }
      });
  }

  save() {
    this.snackBar.open('Saving data to the server ...');
    this.businessService.save(this.business).subscribe(() => {
      setTimeout(() => {
        this.snackBar.open('User data saved', '', {
          duration: 3000
        });
      }, 2000);
    }, (error) => {
      this.snackBar.open('Failed to save user data :(', '', {
        duration: 3000
      });
    });
  }

  uploadImage(event: any, prop: string) {
    if (event.target.files && event.target.files.length > 0) {
      const file: File = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => {
        const blob = window.URL.createObjectURL(file);

        switch (prop) {
          case 'owner':
            this.ownerImage = this.sanitizer.bypassSecurityTrustUrl(blob);
            this.business.EmployeeImg = blob;
            break;
          case 'logo':
            this.homeLogo = this.sanitizer.bypassSecurityTrustUrl(blob);
            this.business.HomeLogo = blob;
            break;
        }
      };

      reader.readAsDataURL(file);
    }
  }

}
