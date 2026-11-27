export interface BotInput {
    userAgent: string;
    webdriver: boolean | null;
    languages: string[];
    plugins: string[];
    maxTouchPoints: number;
    hardwareConcurrency: number | null;
    outerWidth: number;
    outerHeight: number;
    renderer: string | null;
    permissions: Record<string, string>;
    clientHintsBrands: string[];
    engine: string;
}
export interface BotResult {
    score: number;
    isBot: boolean;
    flags: string[];
}
export declare function detectBot(input: BotInput, opts: {
    cdp: boolean;
}): BotResult;
