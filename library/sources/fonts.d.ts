export declare const FONT_GROUPS: {
    windows: string[];
    apple: string[];
    linux: string[];
};
/** Returns the list of detected fonts (sorted), or null if measurement is impossible. */
export declare function getFonts(): string[] | null;
