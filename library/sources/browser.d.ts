export interface NavigatorInfo {
    userAgent: string;
    platform: string;
    vendor: string;
    language: string;
    languages: string[];
    hardwareConcurrency: number | null;
    deviceMemory: number | null;
    maxTouchPoints: number;
    cookieEnabled: boolean;
    pdfViewerEnabled: boolean | null;
    webdriver: boolean | null;
    doNotTrack: string | null;
    globalPrivacyControl: boolean | null;
    plugins: string[];
    mimeTypes: number;
    oscpu: string | null;
    brave: boolean;
}
export declare function getNavigator(): NavigatorInfo;
export interface ScreenInfo {
    width: number;
    height: number;
    availWidth: number;
    availHeight: number;
    colorDepth: number;
    pixelDepth: number;
    devicePixelRatio: number;
    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;
    orientation: string | null;
}
export declare function getScreen(): ScreenInfo;
export interface LocaleInfo {
    timeZone: string | null;
    offsetNow: number;
    offsetStandard: number;
    locale: string | null;
    calendar: string | null;
    numberingSystem: string | null;
    hourCycle: string | null;
}
export declare function getLocale(): LocaleInfo;
export declare function getMediaQueries(): Record<string, string | null>;
export declare function getSystemColors(): string[] | null;
/** Sub-pixel sizes of emoji and rare glyphs: depend on OS font stack and rendering. */
export declare function getTextMetrics(): number[] | null;
export declare function getCodecs(): string[];
export declare function getVoices(timeoutMs?: number): Promise<string[] | null>;
export declare function getPermissions(timeoutMs?: number): Promise<Record<string, string>>;
export declare function getKeyboardLayout(timeoutMs?: number): Promise<string | null>;
export declare function getMediaDevices(timeoutMs?: number): Promise<Record<string, number> | null>;
export declare function getStorageQuota(timeoutMs?: number): Promise<number>;
export interface ClientHints {
    brands: string[];
    mobile: boolean | null;
    platform: string | null;
    platformVersion: string | null;
    architecture: string | null;
    bitness: string | null;
    model: string | null;
    fullVersionList: string[];
    formFactors: string[];
    wow64: boolean | null;
}
export declare function getClientHints(timeoutMs?: number): Promise<ClientHints | null>;
export interface WebGPUInfo {
    vendor: string;
    architecture: string;
    device: string;
    description: string;
    features: string[];
    limits: Record<string, number>;
}
export declare function getWebGPU(timeoutMs?: number): Promise<WebGPUInfo | null>;
/** Inserts bait elements with common ad class names and checks whether a content blocker hid them. */
export declare function getAdBlock(): Promise<boolean | null>;
