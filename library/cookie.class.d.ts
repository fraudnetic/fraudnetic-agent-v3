export default class Cookie {
    /** Sets a first-party cookie; adds `Secure` on HTTPS pages. */
    static set(name: string, value: string, days: number): void;
    /** Writes to cookie, sessionStorage and localStorage. */
    static setToAll(name: string, value: string, days?: number): void;
    static get(name: string): string | null;
    /**
     * Returns the existing session ID from any storage, or creates a new random one.
     * The ID is written back to every storage so it survives if one of them is cleared.
     */
    static getSessionID(): string;
}
