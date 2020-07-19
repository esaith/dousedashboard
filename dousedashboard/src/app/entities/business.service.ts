import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { BusinessVM, IBusiness } from './business';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class BusinessService {
    business: BusinessVM;
    constructor(private http: HttpClient) { }

    save(business: BusinessVM): Observable<BusinessVM> {
        this.business = business;
        return this.http.put<BusinessVM>(`${environment.api}/business/${this.business.Id}`, this.convertToDTO(this.business));
    }

    get(id: string | number): Observable<BusinessVM> {
        if (this.business) {
            return of(this.business);
        } else {
            return this.http.get(`${environment.api}/business/${id}`).pipe(
                flatMap((business: IBusiness) => {
                    this.business = business;
                    return of(this.business);
                })
            );
        }
    }

    private convertToDTO(business: BusinessVM): IBusiness {
        return {
            Id: business.Id,
            Name: business.Name,
            Address: business.Address,
            City: business.City,
            State: business.State,
            Zip: business.Zip,
            Phone: business.Phone,
            Instagram: business.Instagram,
            InstagramTitle: business.InstagramTitle,
            Facebook: business.Facebook,
            FacebookTitle: business.FacebookTitle,
            EmployeeImg: business.EmployeeImg,
            Hours: business.Hours,
            HomeLogo: business.HomeLogo,
            IosMap: business.IosMap,
            GoogleMap: business.GoogleMap,
            BookNow: business.BookNow
        };
    }
}
