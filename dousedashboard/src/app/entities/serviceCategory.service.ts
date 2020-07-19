import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ServiceCategoryVM, IServiceCategory } from './service-category';

@Injectable({
    providedIn: 'root',
})
export class ServiceCategoryService {
    constructor(private http: HttpClient) { }

    save(serviceCategories: Array<ServiceCategoryVM>, businessId: number): Observable<ServiceCategoryVM> {
        return this.http.put<ServiceCategoryVM>(`${environment.api}/services/business/${businessId}`,
            serviceCategories);
    }

    getByBusinessId(businessId: string | number): Observable<Array<ServiceCategoryVM>> {
        return this.http.get<Array<ServiceCategoryVM>>(`${environment.api}/services/business/${businessId}`);
    }
}
