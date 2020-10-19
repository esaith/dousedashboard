import { ServiceCategoryVM, ServiceOptionVM, ServicesVM } from '../entities/service-category';

export function sortBySortOrder(left: { SortOrder: number }, right: { SortOrder: number }) {
    return parseInt(left.SortOrder.toString(), 10) - parseInt(right.SortOrder.toString(), 10);
}
