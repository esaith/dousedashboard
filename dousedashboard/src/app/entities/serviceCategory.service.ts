import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import {
    ServiceCategoryVM,
    ServicesVM,
    IServiceCategory,
    IServiceOption,
    IServices,
    ServiceOptionVM,
} from './service-category';
import { flatMap, mergeMap } from 'rxjs/operators';
import { sortBySortOrder } from '../shared/helper';

@Injectable({
    providedIn: 'root',
})
export class ServiceCategoryService {
    constructor(private http: HttpClient) { }

    save(serviceCategories: Array<ServiceCategoryVM>, businessId: number): Observable<ServiceCategoryVM[]> {
        return this.http.put<ServiceCategoryVM[]>(`${environment.api}/services/business/${businessId}`,
            this.convertToDTO(serviceCategories))
            .pipe(
                mergeMap(response => of(this.convertFromDTO(response)))
            );
    }

    getByBusinessId(businessId: string | number): Observable<Array<ServiceCategoryVM>> {
        return this.http.get<Array<ServiceCategoryVM>>(`${environment.api}/services/business/${businessId}`)
            .pipe(
                mergeMap(response => of(this.convertFromDTO(response)))
            );
    }

    convertToDTO(serviceCategories: Array<ServiceCategoryVM>): Array<IServiceCategory> {
        const result: Array<IServiceCategory> = [];

        serviceCategories.forEach(category => {
            const iCategory: IServiceCategory = {
                Id: category.Id,
                BusinessId: category.BusinessId,
                Name: category.Name,
                ShortName: category.ShortName,
                LinkId: category.LinkId,
                SortOrder: category.SortOrder,
                IsActive: category.IsActive,
                Services: []
            };

            category.Services.forEach(service => {
                const iService: IServices = {
                    Id: service.Id,
                    ServiceCategoryId: service.ServiceCategoryId,
                    ImageUrl: service.ImageUrl,
                    Title: service.Title,
                    Description: this.addHtmlBreak(service.Description),
                    SortOrder: service.SortOrder,
                    IsActive: service.IsActive,
                    ServiceOptions: []
                };

                service.ServiceOptions.forEach(option => {
                    const iOption: IServiceOption = {
                        Id: option.Id,
                        ServicesId: option.ServicesId,
                        Title: option.Title,
                        Description: this.addHtmlBreak(option.Description),
                        Footer: this.addHtmlBreak(option.Footer),
                        SortOrder: option.SortOrder,
                        IsActive: option.IsActive
                    };

                    iService.ServiceOptions.push(iOption);
                });

                iCategory.Services.push(iService);
            });

            result.push(iCategory);
        });

        return result;
    }

    convertFromDTO(serviceCategories: Array<IServiceCategory>): Array<ServiceCategoryVM> {
        const result = new Array<ServiceCategoryVM>();

        serviceCategories.forEach(iCategory => {
            const category: ServiceCategoryVM = new ServiceCategoryVM();

            category.Id = iCategory.Id;
            category.BusinessId = iCategory.BusinessId,
                category.LinkId = iCategory.LinkId;
            category.Name = iCategory.Name;
            category.Services = new Array<ServicesVM>();
            category.ShortName = iCategory.ShortName;
            category.SortOrder = iCategory.SortOrder;
            category.IsActive = iCategory.IsActive;

            iCategory.Services.forEach((iService: IServices) => {
                const service = new ServicesVM();
                service.Description = this.removeHtmlBreak(iService.Description);
                service.Id = iService.Id;
                service.ImageUrl = iService.ImageUrl;
                service.ServiceCategoryId = iService.ServiceCategoryId;
                service.ServiceOptions = new Array<ServiceOptionVM>();
                service.Title = iService.Title;
                service.SortOrder = iService.SortOrder;
                service.IsActive = iService.IsActive;

                iService.ServiceOptions.forEach((iOption: IServiceOption) => {
                    const option = new ServiceOptionVM();
                    option.Description = this.removeHtmlBreak(iOption.Description);
                    option.Footer = this.removeHtmlBreak(iOption.Footer);
                    option.Id = iOption.Id;
                    option.ServicesId = iOption.ServicesId;
                    option.Title = iOption.Title;
                    option.SortOrder = iOption.SortOrder;
                    option.IsActive = iOption.IsActive;

                    service.ServiceOptions.push(option);
                });

                service.ServiceOptions.sort(sortBySortOrder);
                category.Services.push(service);
            });

            category.Services.sort(sortBySortOrder);
            result.push(category);
        });

        result.sort(sortBySortOrder);
        return result;
    }

    addHtmlBreak(val: string): string {
        if (!val) { return val; }
        return val.replace(/\n/g, '<br />').trim();
    }

    removeHtmlBreak(val: string): string {
        if (!val) { return val; }
        return val.replace(/<br \/>/g, '\n');
    }
}