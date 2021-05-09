import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { mergeMap } from 'rxjs/operators';
import { ServiceCategory, ServiceCategoryDTO } from './service-category';
import { sortBySortOrder } from '../shared/helper';

@Injectable({
    providedIn: 'root',
})
export class ServiceCategoryService {
    constructor(private http: HttpClient) { }

    save(serviceCategories: Array<ServiceCategory>, businessId: number): Observable<ServiceCategory[]> {
        const dto = serviceCategories.map(x => new ServiceCategoryDTO(x));

        return this.http.put<ServiceCategoryDTO[]>(`${environment.api}/services/business/${businessId}`, dto)
            .pipe(mergeMap(serviceCategories => of(serviceCategories.map(x => new ServiceCategory(x)).sort(sortBySortOrder))));
    }

    getByBusinessId(businessId: string | number): Observable<Array<ServiceCategory>> {
        return this.http.get<Array<ServiceCategory>>(`${environment.api}/services/business/${businessId}`)
            .pipe(mergeMap(serviceCategories => of(serviceCategories.map(x => new ServiceCategory(x)).sort(sortBySortOrder))));
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