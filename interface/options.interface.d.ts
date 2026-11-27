export default interface OptionsInterface {
    /**
     * Server URL that receives the full signal payload as a JSON POST.
     * Recommended: the server, not the cookie, should be the source of truth for the visitor ID.
     */
    endpoint?: string;
    /** One-time value issued by your server for this page view; sent back with the payload (replay protection). */
    nonce?: string;
    /** Your own user / account identifier, to link devices to accounts. */
    userID?: string | number;
    /** Whether the user is logged in. */
    isLogin?: boolean;
    /** Fetch credentials mode for `endpoint` (default "same-origin"). */
    credentials?: RequestCredentials;
    /** Write the compact payload to the `fn-kml-de-green` cookie and web storage (default true). */
    storeCookie?: boolean;
    /** Chrome DevTools Protocol automation check; logs one empty debug-level message (default true). */
    detectCdp?: boolean;
}
