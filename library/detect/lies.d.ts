export interface LiesInput {
    userAgent: string;
    platform: string;
    languages: string[];
    hardwareConcurrency: number | null;
    timeZone: string | null;
    maxTouchPoints: number;
    screen: {
        width: number;
        height: number;
        availWidth: number;
        availHeight: number;
    };
    renderer: string | null;
    fonts: string[] | null;
    engine: string;
    clientHints: {
        platform: string | null;
        mobile: boolean | null;
        brands: string[];
    } | null;
}
export interface LiesResult {
    score: number;
    flags: string[];
    worker: Record<string, unknown> | null;
}
export declare function detectLies(input: LiesInput, timeoutMs?: number): Promise<LiesResult>;
