import logger from './scripts/logger.js';
import { validateCreateLoggerOptions } from './scripts/processing.js';

/**
 * Confectionery
 * @module confectionery
 */
const confectionery = {
    createLogger: (name) => {
        if (validateCreateLoggerOptions(name)) {
            return new logger(name);
        }
    },
}

export default confectionery;