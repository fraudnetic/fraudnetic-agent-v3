export interface AudioResult {
    supported: boolean;
    value: string | null;
    noised: boolean;
}
export declare function getAudio(timeoutMs?: number): Promise<AudioResult>;
