/**
 * Logger module
 *
 * @module logger
 */
export declare const logger: import("pino").Logger<{
    level: string;
    prettyPrint: false | {
        colorize: boolean;
    };
    enabled: boolean;
}>;
