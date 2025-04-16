export type Range = {
    min: number;
    max: number;
    precision: number;
}

export type Options = {
    name: string;
    value: number;
}

export type Fields = {
    fieldName: string;
    dataType: string;
    options: Options[];
}

export type Parameters = {
    dataType: string;
    unit?: string;
    fields: Fields[];
    required?: boolean;
    range?: Range;
    options?: Options[];
}

export type Capability = {
    type: string;
    instance: string;
    parameters: Parameters;
}

export type Device = {
    sku: string;
    device: string;
    capabilities: Capability[];
}