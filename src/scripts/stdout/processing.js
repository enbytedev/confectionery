import moment from 'moment';
import {template} from 'chalk-template';

/**
 * Process the console log to stdout.
 * @param {string} message 
 * @param {string} context 
 * @param {object} format 
 */
export function processConsoleLog(message, context, format) {
    let messageLines = message.match(/[^\r\n]+/g);
    if (typeof context === 'string' && context != '') { context = context.toUpperCase() + ' > '; } else { context = ''; }

    messageLines.forEach((line) => {
        process.stdout.write(template(format(moment, context, line)));
    });
}