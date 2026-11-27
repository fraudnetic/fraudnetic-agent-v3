import OptionsInterface from './interface/options.interface';
export interface FraudneticResult {
    version: string;
    visitorId: string;
    confidence: number;
    encoded: string;
    payload: Record<string, unknown>;
    full: Record<string, unknown>;
    sent: {
        ok: boolean;
        status: number;
    } | null;
}
declare class Fraudnetic {
    constructor();
    /**
     * Collects the fingerprint and returns all results.
     * Safe to call several times per page: signals are collected only once.
     */
    collect(options?: OptionsInterface): Promise<FraudneticResult>;
    /**
     * Backward-compatible entry point.
     * @param isDevelopment - print debug output and an on-page overlay
     * @param withVersion - return {version, encoded} instead of the encoded string
     * @param options - endpoint, nonce, userID and other settings
     */
    init(isDevelopment?: boolean, withVersion?: boolean, options?: OptionsInterface): Promise<string | {
        version: string;
        encoded: string;
        visitorId: string;
        confidence: number;
    } | {
        version: string;
        encoded: string;
        visitorId?: undefined;
        confidence?: undefined;
    }>;
    private printDevelopment;
}
declare const fraudnetic: Fraudnetic;
export default fraudnetic;
