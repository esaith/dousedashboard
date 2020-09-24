import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { BusinessService } from '../entities/business.service';
import { BusinessVM } from '../entities/business';
import { SaveDialogComponent } from '../shared/save-dialog/save-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
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
          this.homeLogo = this.sanitizer.bypassSecurityTrustUrl(this.business.HomeLogo);
          this.ownerImage = this.sanitizer.bypassSecurityTrustUrl(this.business.EmployeeImg);
          this.snackBar.dismiss();
        }
      });
  }

  async save() {
    this.snackBar.open('Saving data to the server ...');
    await this.sendSave().toPromise();
  }

  sendSave(): Observable<BusinessVM> {
    return this.businessService.save(this.business).pipe(
      catchError(error => {
        this.snackBar.open('Failed to save user data :(', '', {
          panelClass: ['error-snackbar']
        });

        return error;
      }),
      mergeMap((response: BusinessVM) => {
        setTimeout(() => {
          this.snackBar.open('User data saved', '', {
            duration: 3000
          });
        }, 2000);

        return of(response);
      })
    );
  }

  beforeNavigate(pageToNavigate: string) {
    const saveDialogRef = this.dialog.open(SaveDialogComponent);
    saveDialogRef.afterClosed().subscribe(async result => {
      if (result) {
        try {
          await this.save();
          this.router.navigate([`${pageToNavigate}/${this.business.Id}`]);
        } catch (e) { }
      } else {
        this.router.navigate([`${pageToNavigate}/${this.business.Id}`]);
      }
    });
  }

  uploadImage(event: any, prop: string) {
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0].size < 220000) {
        const file: File = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
          const blob = window.URL.createObjectURL(file);

          switch (prop) {
            case 'owner':
              this.ownerImage = this.sanitizer.bypassSecurityTrustUrl(blob);
              this.business.EmployeeImg = e.target.result.toString();
              break;
            case 'logo':
              this.homeLogo = this.sanitizer.bypassSecurityTrustUrl(blob);
              this.business.HomeLogo = e.target.result.toString();
              break;
          }
        };

        reader.readAsDataURL(file);
      } else {
        this.snackBar.open('Image too large. Please make sure image is less than 200 KB (Preferably 100KB or less)', '',
          {
            duration: 5000
          });
      }
    }
  }

}
