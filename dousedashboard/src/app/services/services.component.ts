import { Component, OnInit } from '@angular/core';
import { ServiceCategoryVM, ServiceOptionVM, ServicesVM } from '../entities/service-category';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { ServiceCategoryService } from '../entities/serviceCategory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, mergeMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SaveDialogComponent } from '../shared/save-dialog/save-dialog.component';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  title = 'dousedashboard';
  businessId: number;
  categories = new Array<ServiceCategoryVM>();
  showingDeleteModal = false;
  deleteCategoryIndex = -1;
  deleteServiceIndex = -1;
  deleteServiceOptionIndex = -1;

  selectedCategory: ServiceCategoryVM;
  selectedService: ServicesVM;
  selectedOption: ServiceOptionVM;
  image: SafeUrl;
  backgroundImageUrl: '';

  constructor(
    public serviceCategoryService: ServiceCategoryService,
    public route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.snackBar.open('Getting user data from the server ...');
  }

  ngOnInit() {
    this.businessId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.serviceCategoryService.getByBusinessId(this.businessId)
      .subscribe(serviceCategories => {
        this.categories = serviceCategories;
        this.snackBar.dismiss();
      }, (error) => {
        this.snackBar.open('Unable to retrieve data from the server. Please try again later.', '', {
          panelClass: ['error-snackbar']
        });
      });
  }

  newCategory() {
    const category = new ServiceCategoryVM();
    category.Name = 'New Category ' + (this.categories.length + 1);
    this.categories.push(category);
  }

  newService() {
    const service = new ServicesVM();
    service.Title = 'My New Service' + (this.selectedCategory.Services.length + 1);
    this.selectedCategory.Services.push(service);
  }

  newServiceOption() {
    const serviceOption = new ServiceOptionVM();
    serviceOption.Title = 'Service Option' + (this.selectedService.ServiceOptions.length + 1);
    this.selectedService.ServiceOptions.push(serviceOption);
  }

  selectCategory(category: ServiceCategoryVM) {
    this.selectedCategory = category;
    this.selectedService = null;
    this.selectedOption = null;
  }

  selectService(service: ServicesVM) {
    this.selectedService = service;
    if (this.selectedService.ImageUrl) {
    } else {
      this.image = null;
    }
  }

  editName(item: ServiceCategoryVM | ServicesVM) {
    for (const cat of this.categories) {
      cat.editing = false;
    }

    if (this.selectedCategory) {
      for (const service of this.selectedCategory.Services) {
        service.editing = false;
      }
    }

    item.editing = true;
  }

  editService(service: ServicesVM) {
    for (const s of this.selectedCategory.Services) {
      s.editing = false;
    }

    service.editing = true;
    this.selectedService = service;

    this.image = this.selectedService.ImageUrl;
  }

  saveName(item: ServiceCategoryVM | ServicesVM) {
    item.editing = false;
  }

  editOption(index: number) {
    for (const opt of this.selectedService.ServiceOptions) {
      opt.editing = false;
    }

    this.selectedService.ServiceOptions[index].editing = true;
  }

  verifyDeleteCategory(index: number) {
    this.showingDeleteModal = true;
    this.deleteCategoryIndex = index;
  }

  verifyDeleteService(index: number) {
    this.showingDeleteModal = true;
    this.deleteServiceIndex = index;
  }

  verifyDeleteServiceOption(index: number) {
    this.showingDeleteModal = true;
    this.deleteServiceOptionIndex = index;
  }

  uploadImage(event: any, service: ServicesVM) {
    this.selectedService = service;

    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0].size < 220000) {
        const file: File = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
          const blob = window.URL.createObjectURL(file);
          this.selectedService.ImageUrl = e.target.result.toString();
          this.image = this.sanitizer.bypassSecurityTrustStyle(e.target.result.toString());
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

  async save() {
    this.snackBar.open('Saving...');
    this.categories = await this.sendSave().toPromise();
    this.selectedCategory = null;
    this.selectedService = null;
    this.selectedOption = null;
  }

  sendSave(): Observable<ServiceCategoryVM[]> {
    return this.serviceCategoryService.save(this.categories, this.businessId)
      .pipe(
        catchError(error => {
          this.snackBar.open('Issue saving to the server', '', {
            panelClass: ['error-snackbar']
          });

          return error;
        }),
        mergeMap((response: ServiceCategoryVM[]): Observable<ServiceCategoryVM[]> => {
          if (response) {
            this.snackBar.open('Saved to server', '', {
              duration: 3000
            });
          }

          return of(response);
        })
      );
  }

  beforeNavigate(pageToNavigate: string) {
    const saveDialogRef = this.dialog.open(SaveDialogComponent);
    saveDialogRef.afterClosed().subscribe(async result => {
      if (result) {
        await this.save();
      }

      this.router.navigate([`${pageToNavigate}/${this.businessId}`]);
    });
  }

  delete() {
    if (this.deleteCategoryIndex > -1) {
      const deletedCategory = this.categories.splice(this.deleteCategoryIndex, 1)[0];

      if (this.selectedCategory && deletedCategory && this.selectedCategory.Id === deletedCategory.Id) {
        this.selectedCategory = null;
        this.selectedService = null;
        this.selectedOption = null;
      }
    } else if (this.deleteServiceIndex > -1) {
      const deletedService = this.selectedCategory.Services.splice(this.deleteServiceIndex, 1)[0];

      if (this.selectedService && this.selectedService.Id === deletedService.Id) {
        this.selectedService = null;
        this.selectedOption = null;
      }
    } else if (this.deleteServiceOptionIndex > -1) {
      const deletedOption = this.selectedService.ServiceOptions.splice(this.deleteServiceOptionIndex, 1)[0];
      if (this.selectedOption && this.selectedOption.Id === deletedOption.Id) {
        this.selectedOption = null;
      }
    }

    this.deleteCategoryIndex = -1;
    this.deleteServiceIndex = -1;
    this.deleteServiceOptionIndex = -1;

    this.showingDeleteModal = false;
  }

  cancelModal() {
    this.showingDeleteModal = false;
    this.deleteCategoryIndex = -1;
    this.deleteServiceIndex = -1;
  }

  mock() {
    const category = new ServiceCategoryVM();
    category.Name = 'My Category 1';

    const service = new ServicesVM();
    service.Title = 'My Service';

    const serviceOption = new ServiceOptionVM();
    serviceOption.Title = 'My Option 1';
    service.ServiceOptions.push(serviceOption);

    category.Services.push(service);
    this.categories.push(category);

    this.selectedCategory = category;
    this.selectedService = service;
    this.selectedOption = serviceOption;
  }
}
