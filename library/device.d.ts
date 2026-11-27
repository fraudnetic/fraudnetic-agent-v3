import { ClientHints } from './sources/browser';
export interface DeviceMetadata {
    browser_name: string;
    browser_version: string;
    os_name: string;
    os_version: string;
    device_type: string;
    device_model: string;
    architecture: string;
    cookies: boolean;
    device_is_rooted: boolean;
    user_agent: string;
}
export declare function getDeviceMetadata(ch: ClientHints | null): DeviceMetadata;
