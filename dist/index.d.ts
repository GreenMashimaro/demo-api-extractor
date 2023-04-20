export declare interface Logger {
    info(msg: string, options?: LogOptions): void;
    warn(msg: string, options?: LogOptions): void;
    warnOnce(msg: string, options?: LogOptions): void;
    hasWarned: boolean;
}

export declare type LogLevel = LogType | 'silent';

export declare interface LogOptions {
    clear?: boolean;
    timestamp?: boolean;
    /* Excluded from this release type: testInternal */
}

export declare type LogType = 'error' | 'warn' | 'info';

export declare function showLogger(logger: Logger): void;

export { }
