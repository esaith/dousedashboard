import { Component, OnInit } from '@angular/core';
import { ServiceCategoryVM, ServiceOptionVM, ServicesVM } from '../entities/service-category';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  title = 'dousedashboard';
  categories = new Array<ServiceCategoryVM>();
  name = '';
  showingDeleteModal = false;
  deleteCategoryIndex = -1;
  deleteServiceIndex = -1;
  deleteServiceOptionIndex = -1;

  selectedCategory: ServiceCategoryVM;
  selectedService: ServicesVM;
  selectedServiceOption: ServiceOptionVM;

  constructor() { }

  ngOnInit() {
    const category = new ServiceCategoryVM();
    category.Name = 'My Category 1';

    const service = new ServicesVM();
    service.Name = 'My Service';

    const serviceOption = new ServiceOptionVM();
    serviceOption.Name = 'My Option 1';
    service.ServiceOptions.push(serviceOption);

    category.Services.push(service);
    this.categories.push(category);

    this.selectedCategory = category;
    this.selectedService = service;
    this.selectedServiceOption = serviceOption;
  }

  newCategory() {
    const category = new ServiceCategoryVM();
    category.Id = this.categories.length;
    category.Name = 'New Category ' + (category.Id + 1);
    this.categories.push(category);
  }

  newService() {
    const service = new ServicesVM();
    service.Id = this.selectedCategory.Services.length;
    service.Name = 'My New Service ' + (service.Id + 1);
    this.selectedCategory.Services.push(service);
  }

  newServiceOption() {
    const serviceOption = new ServiceOptionVM();
    serviceOption.Id = this.selectedService.ServiceOptions.length;
    serviceOption.Name = 'Service Option ' + (serviceOption.Id + 1);
    this.selectedService.ServiceOptions.push(serviceOption);
  }

  selectCategory(category: ServiceCategoryVM) {
    this.selectedCategory = category;
  }

  selectService(service: ServicesVM) {
    this.selectedService = service;
  }

  editName(item: ServiceCategoryVM | ServicesVM) {
    for (const cat of this.categories) {
      cat.editing = false;
    }

    for (const service of this.selectedCategory.Services) {
      service.editing = false;
    }

    this.name = item.Name;
    item.editing = true;
  }

  saveName(item: ServiceCategoryVM | ServicesVM) {
    item.Name = this.name;
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

    this.selectCategory = null;
    this.selectedService = null;
    this.selectedServiceOption = null;
  }

  cancelModal() {
    this.showingDeleteModal = false;
    this.deleteCategoryIndex = -1;
    this.deleteServiceIndex = -1;
  }
}
