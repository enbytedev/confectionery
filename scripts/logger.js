import moment from 'moment';
import colors from 'colors';

import { logLevel, logStream } from './config.js';

const log = {
    debug: (message, context) => {
        if (context !== undefined) { message = context + ': ' + message; }
        if (logLevel >= 4) { process.stdout.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` DEBUG > `.gray.bold+`${message}\n`.gray); };
        writeLogFile("DEBUG", message);
    },
    info: (message, context) => {
        if (context !== undefined) { message = context + ': ' + message; }
        if (logLevel >= 3) { process.stdout.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` INFO  > `.cyan.bold+`${message}\n`.gray); };
        writeLogFile("INFO", message);
    },
    warn: (message, context) => {
        if (context !== undefined) { message = context.bold + ': ' + message; }
        if (logLevel >= 2) { process.stdout.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` WARN  > `.yellow.bold+`${message}\n`.gray); }
        writeLogFile("WARN", message);
    },
    error: (message, context) => {
        if (context !== undefined) { message = context.bold + ': ' + message; }
        if (logLevel >= 1) { process.stdout.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` ERROR > `.red.bold+`${message}\n`.gray); }
        writeLogFile("ERROR", message);
    }
}

function writeLogFile (level, message) {
    if (logStream !== undefined) {
    logStream.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}] ${level} > ${message}\n`);
    }
}

export default log