import moment from 'moment';
import colors from 'colors';

import { logLevel, logStream, consoleFormat } from './config.js';

const log = {
    debug: (message, context) => {
        if (logLevel >= 4) {processConsoleLog(message, context, consoleFormat.debug);};
        writeLogFile("DEBUG", message);
    },
    info: (message, context) => {
        if (logLevel >= 3) {processConsoleLog(message, context, consoleFormat.info);};
        writeLogFile("INFO", message);
    },
    warn: (message, context) => {
        if (logLevel >= 2) {processConsoleLog(message, context, consoleFormat.warn);}
        writeLogFile("WARN", message);
    },
    error: (message, context) => {
        if (logLevel >= 1) {processConsoleLog(message, context, consoleFormat.error); }
        writeLogFile("ERROR", message);
    }
}

function processConsoleLog(message, context, format) {
    if (context !== undefined) { message = context + ': ' + message; }
    process.stdout.write(eval(format));
}

function writeLogFile (level, message) {
    if (logStream !== undefined) {
    logStream.write(`[${moment().format('HH:mm:ss:ms')}] ${level} > ${message}\n`);
    }
}

export default log