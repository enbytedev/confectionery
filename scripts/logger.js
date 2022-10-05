import streamHandler from './logfile/streamHandler.js';
import { processConsoleLog } from './stdout/processing.js';
import { processLevel, processFormat } from './processing.js';
import { classic } from './stdout/templates.js';

const logLevel = 3; // Default to INFO
const consoleFormat = classic; // Default to classic

export default class Logger {
    constructor(name) {
        this.logLevel = logLevel;
        this.consoleFormat = consoleFormat;
        this.logStream;
        this.name = name;
    }

    log(message, context) {
        this.info(message, context);
    }

    debug(message, context) {
        if (this.logLevel >= 4) { processConsoleLog(message, context, this.consoleFormat.debug); };
        streamHandler.write(this.logStream, 'DEBUG', message);
    }

    info(message, context) {
        if (this.logLevel >= 3) { processConsoleLog(message, context, this.consoleFormat.info); };
        streamHandler.write(this.logStream, 'INFO', message);
    }

    warn(message, context) {
        if (this.logLevel >= 2) { processConsoleLog(message, context, this.consoleFormat.warn); }
        streamHandler.write(this.logStream, 'WARN', message);
    }

    error(message, context) {
        if (this.logLevel >= 1) { processConsoleLog(message, context, this.consoleFormat.error); }
        streamHandler.write(this.logStream, 'ERROR', message);
    }

    setLevel(level) {
        this.logLevel = processLevel(level);
    }

    setLogPath(filePath) {
        this.logStream = streamHandler.openStream(filePath, this.name);
    }

    setConsoleFormat(format) {
        this.consoleFormat = processFormat(format);
    }
};