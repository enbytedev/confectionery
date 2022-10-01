import moment from 'moment';
import colors from 'colors';

import { logLevel, consoleFormat } from './config.js';
import logToFile from './logToFile.js';

const log = {
    debug: (message, context) => {
        if (logLevel >= 4) {processConsoleLog(message, context, consoleFormat.debug);};
        logToFile.write('DEBUG', message);
    },
    info: (message, context) => {
        if (logLevel >= 3) {processConsoleLog(message, context, consoleFormat.info);};
        logToFile.write('INFO', message);
    },
    warn: (message, context) => {
        if (logLevel >= 2) {processConsoleLog(message, context, consoleFormat.warn);}
        logToFile.write('WARN', message);
    },
    error: (message, context) => {
        if (logLevel >= 1) {processConsoleLog(message, context, consoleFormat.error); }
        logToFile.write('ERROR', message);
    }
}

function processConsoleLog(message, context, format) {
    if (context !== undefined) { message = context + ': ' + message; }
    process.stdout.write(eval(format));
}

export default log