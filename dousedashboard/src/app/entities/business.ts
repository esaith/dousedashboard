export interface IBusiness {
    Id: string;
    Name: string;
    Address: string;
    City: string;
    State: string;
    Zip: string;
    Phone: string;
    Instagram: string;
    InstagramTitle: string;
    Facebook: string;
    FacebookTitle: string;
    EmployeeImg: string;
    Hours: string;
    HomeLogo: string;
    IosMap: string;
    GoogleMap: string;
    BookNow: string;
}

export class BusinessVM implements IBusiness {
    Id: string;
    Name: string;
    Address: string;
    City: string;
    State: string;
    Zip: string;
    Phone: string;
    Instagram: string;
    InstagramTitle: string;
    Facebook: string;
    FacebookTitle: string;
    EmployeeImg: string;
    Hours: string;
    HomeLogo: string;
    IosMap: string;
    GoogleMap: string;
    BookNow: string;
}
