export interface CanvasResult {
    supported: boolean;
    text: string | null;
    geometry: string | null;
    noised: boolean;
    blocked: boolean;
}
export declare function getCanvas(): CanvasResult;
