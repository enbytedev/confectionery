import {template} from 'chalk-template';
import logger from './scripts/logger.js';
import { validateCreateLoggerOptions } from './scripts/processing.js';

/**
 * Confectionery
 * @module confectionery
 */
const confectionery = {
    /**
     * Create a logger instance
     * @param {string} name The name of the logger instance.
     * @returns {logger} New logger instance.
     */
    createLogger: (name) => {
        if (validateCreateLoggerOptions(name)) {
            return new logger(name);
        }
    },
    /**
     * Prints without a logger instance. This is intended for other packages or for use before a logger instance is created.
     * @param {function} format The format to use for the message.
     * @param  {...any} args Arguments to pass to the format function.
     * @returns 
     */
    customPrint: (format, ...args) => {
        if (typeof format !== 'function') { console.error('confectionery customPrint requires a format function'); return; }
        process.stdout.write(template(format(...args)));
    }
}

export default confectionery;