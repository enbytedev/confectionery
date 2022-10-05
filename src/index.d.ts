export default confectionery;
declare namespace confectionery {
    function createLogger(name: string): logger;


    interface logger {
        logStream: object;
        logLevelConsole: number;
        logLevelFile: number;
        consoleFormat: {
            debug: (moment: object, context: string, line: string) => string;
            info: (moment: object, context: string, line: string) => string;
            warn: (moment: object, context: string, line: string) => string;
            error: (moment: object, context: string, line: string) => string;
        };
        name: string;

        log(message: string, context?: string): void;
        debug(message: string, context?: string): void;
        info(message: string, context?: string): void;
        warn(message: string, context?: string): void;
        error(message: string, context?: string): void;

        setLevel(console: LogLevel, file: LogLevel): void;
        setLogPath(path: string): void;
        setFormat(format: LogFormat): void;
    }
    export type LogLevel = 0 | 1 | 2 | 3 | 4 | "SILENT" | "ERROR" | "WARN" | "INFO" | "DEBUG";
    export type LogFormat = object | "CLASSIC" | "SHORT" | "SYMBOLS";
    
}