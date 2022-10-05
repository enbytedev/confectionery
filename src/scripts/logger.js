import streamHandler from './logfile/streamHandler.js';
import { processConsoleLog } from './stdout/processing.js';
import { processLevel, processFormat } from './processing.js';
import { classic } from './stdout/templates.js';

const logLevelDefault = 3; // Default to INFO
const consoleFormatDefault = classic; // Default to classic

/**
 * @typedef {object | "CLASSIC" | "SHORT" | "SYMBOLS"} LogFormat
 */

export default class Logger {
    constructor(name) {
        this.logLevelConsole = logLevelDefault;
        this.logLevelFile = logLevelDefault;
        this.consoleFormat = consoleFormatDefault;
        this.logStream;
        this.name = name;
    }

    log(message, context) {
        this.info(message, context);
    }

    debug(message, context) {
        if (this.logLevelConsole >= 4) { processConsoleLog(message, context, this.consoleFormat.debug); };
        if (this.logLevelFile >= 4) { streamHandler.write(this.logStream, 'DEBUG', message); }
    }

    info(message, context) {
        if (this.logLevelConsole >= 3) { processConsoleLog(message, context, this.consoleFormat.info); };
        if (this.logLevelFile >= 3) { streamHandler.write(this.logStream, 'INFO', message); }
    }

    warn(message, context) {
        if (this.logLevelConsole >= 2) { processConsoleLog(message, context, this.consoleFormat.warn); }
        if (this.logLevelFile >= 2) { streamHandler.write(this.logStream, 'WARN', message); }
    }

    error(message, context) {
        if (this.logLevelConsole >= 1) { processConsoleLog(message, context, this.consoleFormat.error); }
        if (this.logLevelFile >= 1) { streamHandler.write(this.logStream, 'ERROR', message); }
    }

    /**
     * Set the log level for both the console and log file.
     * @param {number | string} cons The log level for the console.
     * @param {number | string} file The log level for the log file.
     */
    setLevel(cons, file) {
        if (cons == null || file == null) {
            console.warn("Please provide both a console and file log level. Log level unchanged.");
        } else {
            this.logLevelConsole = processLevel(cons, "Console");
            this.logLevelFile = processLevel(file, "Log File");
        }
    }

    /**
     * Set the path to the log folder.
     * @param {string} filePath 
     */
    setLogPath(filePath) {
        this.logStream = streamHandler.openStream(filePath, this.name);
    }

    /**
     * Set the format to use in the console.
     * @param {LogFormat} format 
     */
    setFormat(format) {
        this.consoleFormat = processFormat(format);
    }
};