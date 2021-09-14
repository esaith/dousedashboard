import { Component, OnInit, Optional } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, mergeMap } from 'rxjs/operators';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

import { ServiceCategory, ServiceOption, Service } from '../entities/service-category';
import { ServiceCategoryService } from '../entities/serviceCategory.service';
import { MatDialog } from '@angular/material/dialog';
import { SaveDialogComponent } from '../shared/save-dialog/save-dialog.component';
import { of, Observable } from 'rxjs';
import { DeleteDialogComponent } from '../shared/delete-dialog/delete-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  title = 'dousedashboard';
  businessId: number;
  categories = new Array<ServiceCategory>();
  selectedCategory: ServiceCategory;
  selectedService: Service;
  selectedOption: ServiceOption;
  image: SafeUrl;
  backgroundImageUrl: '';
  images = new Array<File>();
  azureLocation = environment.azureLocation;

  constructor(
    public serviceCategoryService: ServiceCategoryService,
    public route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
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

  createCategory() {
    const category = new ServiceCategory();
    category.Name = 'New Category ' + (this.categories.length + 1);
    this.categories.push(category);
  }

  newService() {
    const service = new Service();
    service.Title = 'My New Service' + (this.selectedCategory.Services.length + 1);
    this.selectedCategory.Services.push(service);
  }

  newServiceOption() {
    const serviceOption = new ServiceOption();
    serviceOption.Title = 'Service Option' + (this.selectedService.ServiceOptions.length + 1);
    this.selectedService.ServiceOptions.push(serviceOption);
  }

  selectCategory(category: ServiceCategory) {
    this.selectedCategory = category;
    this.selectedService = null;
    this.selectedOption = null;
  }

  selectService(service: Service) {
    this.selectedService = service;
    if (this.selectedService.ImageUrl) {
    } else {
      this.image = null;
    }
  }

  editName(item: ServiceCategory | Service) {
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

  editService(service: Service) {
    for (const s of this.selectedCategory.Services) {
      s.editing = false;
    }

    service.editing = true;
    this.selectedService = service;

    this.image = this.selectedService.ImageUrl;
  }

  saveName(item: ServiceCategory | Service) {
    item.editing = false;
  }

  editOption(index: number) {
    for (const opt of this.selectedService.ServiceOptions) {
      opt.editing = false;
    }

    this.selectedService.ServiceOptions[index].editing = true;
  }

  deleteCategory(category: ServiceCategory) {
    const deleteDialog = this.dialog.open(DeleteDialogComponent);
    deleteDialog.afterClosed().subscribe(async result => {
      if (result) {
        this.categories = this.categories.filter(x => x.Id !== category.Id);
        this.selectedCategory = null;
        this.selectedService = null;
        this.selectedOption = null;
      }
    });
  }

  deleteService(service: Service) {
    const deleteDialog = this.dialog.open(DeleteDialogComponent);
    deleteDialog.afterClosed().subscribe(async result => {
      if (result) {
        this.selectedCategory.Services = this.selectedCategory.Services.filter(x => x.Id !== service.Id);
        this.selectedService = null;
        this.selectedOption = null;
      }
    });
  }

  deleteOption(option: ServiceOption) {
    const deleteDialog = this.dialog.open(DeleteDialogComponent);
    deleteDialog.afterClosed().subscribe(async result => {
      if (result) {
        this.selectedService.ServiceOptions = this.selectedService.ServiceOptions.filter(x => x.Id !== option.Id);
        this.selectedOption = null;
      }
    });
  }

  uploadImage(event: any, service: { ImageUrl: string, tempImageUrl }) {
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0].size < 320000) {
        const file: File = event.target.files[0];
        this.images.push(file);
        const reader = new FileReader();

        reader.onload = e => {
          const blob = window.URL.createObjectURL(file);
          service.ImageUrl = file.name;
          service.tempImageUrl = blob;
          this.image = this.sanitizer.bypassSecurityTrustStyle(blob);
        };

        reader.readAsDataURL(file);
      } else {
        this.snackBar.open('Image too large. Please make sure image is less than 300 KB (Preferably 100KB or less)', '',
          {
            duration: 5000
          });
      }
    }
  }

  deleteImage(service: { ImageUrl: string, tempImageUrl: string }) {
    this.images = this.images.filter(file => file.name !== service.ImageUrl);
    service.tempImageUrl = '';
    service.ImageUrl = '';
  }

  async save() {
    this.snackBar.open('Saving...');

    const categoryId = this.selectedCategory?.Id;
    const selectedServiceId = this.selectedService?.Id;
    const selectedOptionId = this.selectedOption?.Id;

    this.sendSave().subscribe(categories => {
      this.categories = categories;
      if (categoryId) {
        const selectedCategory = this.categories.find(x => x.Id === categoryId);

        if (selectedCategory)
          this.selectCategory(selectedCategory);

        if (selectedServiceId) {
          const selectedService = this.selectedCategory.Services.find(x => x.Id === selectedServiceId);

          if (selectedService)
            this.selectService(selectedService);

          if (selectedOptionId)
            this.selectedOption = this.selectedService.ServiceOptions.find(x => x.Id === selectedOptionId);
        }
      }
    });
  }

  sendSave(): Observable<ServiceCategory[]> {
    return this.serviceCategoryService.save(this.categories, this.businessId, this.images)
      .pipe(
        catchError(error => {
          this.snackBar.open('Issue saving to the server', '', {
            panelClass: ['error-snackbar']
          });

          return error;
        }),
        mergeMap((response: ServiceCategory[]): Observable<ServiceCategory[]> => {
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

  onCategoryDrop(event: CdkDragDrop<ServiceCategory[]>): void {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
    this.categories = this.categories.map((cat: ServiceCategory, index: number) => {
      cat.SortOrder = index;
      return cat;
    });
  }

  onServiceDrop(event: CdkDragDrop<Service[]>): void {
    moveItemInArray(this.selectedCategory.Services, event.previousIndex, event.currentIndex);
    this.selectedCategory.Services = this.selectedCategory.Services.map((service: Service, index: number) => {
      service.SortOrder = index;
      return service;
    });
  }

  onOptionDrop(event: CdkDragDrop<Service[]>): void {
    moveItemInArray(this.selectedService.ServiceOptions, event.previousIndex, event.currentIndex);
    this.selectedService.ServiceOptions = this.selectedService.ServiceOptions.map((option: ServiceOption, index: number) => {
      option.SortOrder = index;
      return option;
    });
  }

  trackById(index: number, item: { Id: number }) {
    return item.Id;
  }
}
