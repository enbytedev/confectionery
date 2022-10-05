import moment from 'moment';
import {template} from 'chalk-template';

import { logLevel, consoleFormat } from './config.js';
import logToFile from './logToFile.js';

/**
 * Log a message to the console.
 * @param {string} message
 * @param {string} [context]
 */
const log = {
    debug: (message, context) => {
        if (logLevel >= 4) { processConsoleLog(message, context, consoleFormat.debug); };
        logToFile.write('DEBUG', message);
    },
    info: (message, context) => {
        if (logLevel >= 3) { processConsoleLog(message, context, consoleFormat.info); };
        logToFile.write('INFO', message);
    },
    warn: (message, context) => {
        if (logLevel >= 2) { processConsoleLog(message, context, consoleFormat.warn); }
        logToFile.write('WARN', message);
    },
    error: (message, context) => {
        if (logLevel >= 1) { processConsoleLog(message, context, consoleFormat.error); }
        logToFile.write('ERROR', message);
    }
}

/**
 * Process the console log to stdout.
 * @param {string} message 
 * @param {string | undefined} context 
 * @param {object} format 
 */
function processConsoleLog(message, context, format) {
    let messageLines = message.match(/[^\r\n]+/g);
    if (context !== undefined) { context = context.toUpperCase() + ' > '; } else { context = ''; }

    messageLines.forEach((line) => {
        process.stdout.write(template(formatLog(format, {context: context, line: line, moment: moment})));
    });
}

/**
 * Replace the template variables in the log format.
 * @param {string} format The template string.
 * @param {object} obj Object with template variables.
 * @returns {string} The log with the template variables replaced.
 */
function formatLog(format, obj) {
    const keys = Object.keys(obj);
    const values = Object.keys(obj).map(keys => obj[keys]);
    return new Function(...keys, `return ${format};`)(...values);
  }

export default log