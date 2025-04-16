import { Capability } from "./device";

export type CapabilityCommand = Omit<Capability, "parameters"> & {
    value: number;
}

export type Payload = {
    sku: string;
    device: string;
    capability?: CapabilityCommand;
}

export type Request = {
    requestId: string;
    payload: Payload;
}