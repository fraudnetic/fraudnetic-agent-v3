export interface WebGLResult {
    supported: boolean;
    version: 1 | 2 | 0;
    vendor: string | null;
    renderer: string | null;
    unmaskedVendor: string | null;
    unmaskedRenderer: string | null;
    shadingLanguage: string | null;
    params: Record<string, unknown>;
    precision: string[];
    extensions: string[];
    contextAttributes: Record<string, unknown> | null;
    render: string | null;
    noised: boolean;
}
export declare function getWebGL(): WebGLResult;
