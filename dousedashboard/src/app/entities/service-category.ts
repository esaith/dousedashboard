export interface IServiceCategory {
    Id: number;
    BusinessId: number;
    Name: string;
    ShortName: string;
    LinkId: string;

    Services: Array<IServices>;
}

export class ServiceCategoryVM implements IServiceCategory {
    Id: number;
    BusinessId: number;
    Name: string;
    ShortName: string;
    LinkId: string;

    Services = new Array<ServicesVM>();

    editing = false;
    constructor() {
    }
}

export interface IServices {
    Id: number;
    ServiceCategoryId: number;
    Name: string;
    ImageUrl: string;
    Title: string;
    Description: string;

    ServiceOptions: Array<IServiceOption>;
}

export class ServicesVM implements IServices {
    Id: number;
    ServiceCategoryId: number;
    Name: string;
    ImageUrl: string;
    Title: string;
    Description: string;

    ServiceOptions = new Array<ServiceOptionVM>();
    editing = false;
    constructor() {
    }
}

export interface IServiceOption {
    Id: number;
    ServicesId: number;
    Name: string;
    Description: string;
    Footer: string;
}

export class ServiceOptionVM implements IServiceOption {
    Id: number;
    ServicesId: number;
    Name: string;
    Description: string;
    Footer: string;

    editing = false;
    constructor() {
    }
}
