import { Component, OnInit } from '@angular/core';
import { ServiceCategoryVM, ServiceOptionVM, ServicesVM } from '../entities/service-category';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { ServiceCategoryService } from '../entities/serviceCategory.service';
import { ActivatedRoute } from '@angular/router';

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
  selectedServiceOption: ServiceOptionVM;
  image: SafeUrl;

  constructor(
    public serviceCategoryService: ServiceCategoryService,
    public route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private snackBar: MatSnackBar) {
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
          duration: 3000
        });
      });

    // this.mock();
  }

  newCategory() {
    const category = new ServiceCategoryVM();
    category.Name = 'New Category ';
    this.categories.push(category);
  }

  newService() {
    const service = new ServicesVM();
    service.Title = 'My New Service';
    this.selectedCategory.Services.push(service);
  }

  newServiceOption() {
    const serviceOption = new ServiceOptionVM();
    serviceOption.Title = 'Service Option';
    this.selectedService.ServiceOptions.push(serviceOption);
  }

  selectCategory(category: ServiceCategoryVM) {
    this.selectedCategory = category;
    this.selectedService = null;
  }

  selectService(service: ServicesVM) {
    this.selectedService = service;
    if (this.selectedService.ImageUrl) {
      this.image = this.sanitizer.bypassSecurityTrustUrl(this.selectedService.ImageUrl);
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
    this.image = this.sanitizer.bypassSecurityTrustUrl(service.ImageUrl);
  }

  saveName(item: ServiceCategoryVM | ServicesVM) {
    item.editing = false;
  }

  exitName(item: ServiceCategoryVM | ServicesVM) {
    item.editing = false;
  }

  editOption(option: ServiceOptionVM) {
    for (const opt of this.selectedService.ServiceOptions) {
      opt.editing = opt.Id === option.Id;
    }
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
          this.image = this.sanitizer.bypassSecurityTrustUrl(e.target.result.toString());
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

  save() {
    this.snackBar.open('Saving...');
    this.serviceCategoryService.save(this.categories, this.businessId).subscribe(() => {
      this.snackBar.open('Saved to server', '', {
        duration: 3000
      });
    });
  }

  delete() {
    if (this.deleteServiceIndex > -1) {
      this.selectedCategory.Services.splice(this.deleteServiceIndex, 1);
    } else if (this.deleteCategoryIndex > -1) {
      this.categories.splice(this.deleteCategoryIndex, 1);
    } else if (this.deleteServiceOptionIndex > -1) {
      this.selectedService.ServiceOptions.splice(this.deleteServiceOptionIndex, 1);
    }

    this.deleteCategoryIndex = -1;
    this.deleteServiceIndex = -1;
    this.deleteServiceOptionIndex = -1;

    this.showingDeleteModal = false;

    this.selectedCategory = null;
    this.selectedService = null;
    this.selectedServiceOption = null;
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
    this.selectedServiceOption = serviceOption;
  }
}
