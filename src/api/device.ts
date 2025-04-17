import { Device } from "../types/device";

export const fetchDevices = async ():Promise<Device[]> => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/devices`);
    if (!response.ok) {
        throw new Error(`HTTP Error : ${response.status}`)
    }
    const { data } = await response.json();
    return data;
}