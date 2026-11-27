export default class Log {
    static info(...args: unknown[]): void;
    static error(...args: unknown[]): void;
    static warn(...args: unknown[]): void;
}
