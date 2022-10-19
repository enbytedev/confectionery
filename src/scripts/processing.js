import { classic, short, symbols } from './stdout/templates.js';

const regex = new RegExp(/^[A-Za-z0-9_.]+$/);

/**
 * Set the log level to output to the console. Logs warning if the level is not valid.
 * @param {0 | 1 | 2 | 3 | 4 | "SILENT" | "ERROR" | "WARN" | "INFO" | "DEBUG"} level
 * @param {string} type The item being set.
 * @returns {void}
 */
export function processLevel(level, type) {
    if (typeof level === 'number') {
        if (level > 4 || level < 0) {
            console.warn("Invalid console log level: " + level + ". Valid levels are 0-4. Log level for " + type + " is 3, the default.");
            return 3;
        } else {
            return level;
        }
    } else {
        switch (level.toUpperCase()) {
            case 'SILENT': return 0;
            case 'ERROR': return 1;
            case 'WARN': return 2
            case 'INFO': return 3
            case 'DEBUG': return 4
            default: console.warn("Invalid " + type + " log level: " + level + ". Valid levels are SILENT, ERROR, WARN, INFO, DEBUG. Log level is 3, the default."); return 3;
        }
    }
}

/**
 * Validates the options of the potential new logger instance.
 * @param {string} name Name of the logger instance
 * @returns {boolean} True if the options are valid, false if not.
 */
export function validateCreateLoggerOptions(name) {
    if (typeof name !== 'string' || name === '') {
        console.error('Please provide a valid string for the logger name. Did not create logger instance: ' + name);
        return false;
    } else if (regex.test(name) == false) {
        console.error('The provided name is invalid. Did not create logger instance: ' + name);
        return false;
    } else {
        return true;
    }
}

export function processFormat(format) {
    //TODO: Add support for log formats in logfiles
    return processConsoleFormat(format);
}

function processConsoleFormat(format) {
    if (typeof format == 'object') {
        if (format?.debug && format?.info && format?.warn && format?.error) {
            return format;
        } else {
            console.warn("Invalid console format object provided. Console logging format has defaulted to CLASSIC.");
            return classic;
        }
    } else {
        switch (format.toUpperCase()) {
            case 'CLASSIC': return classic;
            case 'SHORT': return short;
            case 'SYMBOLS': return symbols;
            default: console.warn("Invalid console format: " + format + ". Valid formats are CLASSIC, SHORT, SYMBOLS. Console logging format has defaulted to CLASSIC."); return classic;
        }
    }
}