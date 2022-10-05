import moment from 'moment';
import {template} from 'chalk-template';

/**
 * Process the console log to stdout.
 * @param {string} message 
 * @param {string | undefined} context 
 * @param {object} format 
 */
export function processConsoleLog(message, context, format) {
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