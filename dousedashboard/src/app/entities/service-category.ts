export interface IServiceCategory {
    Id: number;
    BusinessId: number;
    Name: string;
    ShortName: string;
    LinkId: string;
    SortOrder: number;

    Services: Array<IServices>;
}

export class ServiceCategoryVM implements IServiceCategory {
    Id: number;
    BusinessId: number;
    Name: string;
    ShortName: string;
    LinkId: string;
    SortOrder: number;

    Services = new Array<ServicesVM>();

    editing = false;

    constructor() { }
}

export interface IServices {
    Id: number;
    ServiceCategoryId: number;
    ImageUrl: string;
    Title: string;
    Description: string;
    SortOrder: number;

    ServiceOptions: Array<IServiceOption>;
}

export class ServicesVM implements IServices {
    Id: number;
    ServiceCategoryId: number;
    ImageUrl: string;
    Title: string;
    Description: string;
    SortOrder: number;

    ServiceOptions = new Array<ServiceOptionVM>();

    editing = false;
    constructor() { }
}

export interface IServiceOption {
    Id: number;
    ServicesId: number;
    Title: string;
    Description: string;
    Footer: string;
    SortOrder: string;
}

export class ServiceOptionVM implements IServiceOption {
    Id: number;
    ServicesId: number;
    Title: string;
    Description: string;
    Footer: string;
    SortOrder: string;

    editing = false;
    constructor() {
    }
}
