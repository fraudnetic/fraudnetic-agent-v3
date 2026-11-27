export interface IncognitoResult {
    isPrivate: boolean | null;
    browserName: string;
    method: string;
}
export declare function detectIncognito(timeoutMs?: number): Promise<IncognitoResult>;
