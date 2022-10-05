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
}

export default confectionery;