export function copyPrimitives(obj: any, dto: any) {
    if (!dto) return obj;

    const keys = Object.keys(obj);

    for (const key of keys) {
        // Need to allow false values to overwrite true, but ignore undefined and null values.
        if (isDefined(dto[key]) && dto.hasOwnProperty(key) && isPrimitive(obj[key])) {
            if (typeof obj[key] === 'number') {
                obj[key] = hydrateNumber(obj, dto, key);
            } else if (typeof obj[key] === 'boolean') {
                obj[key] = hydrateBoolean(obj, dto, key);
            } else {
                obj[key] = dto[key];
            }
        }
    }

    return obj;
}

function isDefined(val: any) {
    return val !== undefined && val != null;
}

function isPrimitive(value: any) {
    return (typeof value !== 'object' && typeof value !== 'function') || value === null;
}

export function parseIntValue(val: number): number {
    let intValue = parseInt(val?.toString(), 10);
    if (!intValue || isNaN(intValue)) intValue = 0;

    return intValue;
}


function hydrateNumber(obj: any, dto: any, key: string): number {
    let result = 0;
    if (propertyIsFloat(obj[key].toString()) || propertyIsFloat(dto[key].toString()))
        result = parseFloat(dto[key]);
    else result = parseInt(dto[key], 10);

    return result;
}

function hydrateBoolean(obj: any, dto: any, key: string): boolean {
    let result = false;

    if (typeof dto[key] === 'boolean') result = dto[key];
    else result = dto[key].toString().toLowerCase() === 'true';

    return result;
}

function propertyIsFloat(prop: string): boolean {
    return prop && prop.indexOf('.') > -1;
}