import { sortBySortOrder } from '../shared/helper';

export class ServiceCategoryDTO {
    Id = 0;
    BusinessId = 0;
    Name = '';
    ShortName = '';
    LinkId = '';
    SortOrder = 0;
    IsActive = true;

    Services: Array<ServiceDTO>;

    constructor(serviceCategory?: ServiceCategory) {
        if (serviceCategory) {
            Object.assign(this, serviceCategory);
            this.Services = serviceCategory.Services?.map(x => new ServiceDTO(x));
        }
    }
}

export class ServiceCategory extends ServiceCategoryDTO {
    Services = new Array<Service>();

    editing = false;

    constructor(dto?: ServiceCategoryDTO) {
        super();

        if (dto) {
            Object.assign(this, dto);
            this.Services = dto.Services?.map(service => new Service(service)) || new Array<Service>();
            this.Services.sort(sortBySortOrder);
        }
    }
}

export class ServiceDTO {
    Id = 0;
    ServiceCategoryId = 0;
    ImageUrl = '';
    Title = '';
    Description = '';
    SortOrder = 0;
    IsActive = true;

    ServiceOptions: Array<ServiceOptionDTO>;

    constructor(service?: Service) {
        if (service) {
            Object.assign(this, service);
            this.ServiceOptions = service.ServiceOptions?.map(x => new ServiceOptionDTO(x));
        }
    }
}

export class Service extends ServiceDTO {
    ServiceOptions = new Array<ServiceOption>();

    editing = false;
    constructor(dto?: ServiceDTO) {
        super();

        if (dto) {
            Object.assign(this, dto);
            this.ServiceOptions = dto?.ServiceOptions?.map(opt => new ServiceOption(opt)) || new Array<ServiceOption>();
            this.ServiceOptions.sort(sortBySortOrder);
        }
    }
}

export class ServiceOptionDTO {
    Id = 0;
    ServicesId = 0;
    Title = '';
    Description = '';
    Footer = '';
    SortOrder = 0;
    IsActive = true;

    constructor(option?: ServiceOption) {
        if (option) {
            Object.assign(this, option);
        }
    }
}

export class ServiceOption extends ServiceOptionDTO {
    editing = false;
    constructor(dto?: ServiceOptionDTO) {
        super();

        if (dto) {
            Object.assign(this, dto)
        }
    }
}
