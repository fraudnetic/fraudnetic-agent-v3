import { Engine } from './utils';
import { CanvasResult } from './sources/canvas';
import { WebGLResult } from './sources/webgl';
import { AudioResult } from './sources/audio';
import { ClientHints, LocaleInfo, NavigatorInfo, ScreenInfo, WebGPUInfo } from './sources/browser';
import { IncognitoResult } from './detectIncognito';
import { BotResult } from './detect/bot';
import { LiesResult } from './detect/lies';
import { DeviceMetadata } from './device';
export interface CollectOptions {
    detectCdp?: boolean;
}
export interface RawSignals {
    engine: Engine;
    navigator: NavigatorInfo;
    screen: ScreenInfo;
    locale: LocaleInfo;
    mediaQueries: Record<string, string | null>;
    systemColors: string[] | null;
    textMetrics: number[] | null;
    codecs: string[];
    math: string;
    canvas: CanvasResult;
    webgl: WebGLResult;
    webgpu: WebGPUInfo | null;
    audio: AudioResult;
    fonts: string[] | null;
    voices: string[] | null;
    permissions: Record<string, string>;
    keyboardLayout: string | null;
    mediaDevices: Record<string, number> | null;
    storageQuota: number;
    clientHints: ClientHints | null;
    incognito: IncognitoResult;
    adBlock: boolean | null;
}
export interface Collected {
    visitorId: string;
    confidence: number;
    stableComponents: string[];
    noise: string[];
    componentHashes: Record<string, string>;
    raw: RawSignals;
    bot: BotResult;
    lies: LiesResult;
    device: DeviceMetadata;
    durationMs: number;
}
/** Collects everything once per page load; later calls reuse the same result. */
export declare function collect(options?: CollectOptions): Promise<Collected>;
