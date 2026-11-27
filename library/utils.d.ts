/** Resolves with `fallback` if `promise` does not settle within `ms` (never rejects). */
export declare function withTimeout<T>(promise: Promise<T> | T, ms: number, fallback: T): Promise<T>;
export declare function wait(ms: number): Promise<void>;
/** Waits until document.body exists (init() may be called from <head>). */
export declare function whenBodyReady(timeoutMs?: number): Promise<boolean>;
/** Runs `fn`, returns `fallback` on any exception. */
export declare function attempt<T>(fn: () => T, fallback: T): T;
/** True when the function's source is the engine's native placeholder. */
export declare function looksNative(fn: unknown): boolean;
/** Stable JSON: object keys are sorted so the same data always serialises identically. */
export declare function stableStringify(value: unknown): string;
export declare function hasWindow(): boolean;
/** Engine detected from the length of a native error message; cannot be changed by UA spoofing. */
export type Engine = 'blink' | 'gecko' | 'webkit' | 'unknown';
export declare function detectEngine(): Engine;
