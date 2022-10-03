import logger from './logger.js';
import fs from 'fs';
import { classic, short, symbols } from './templates.js';
import logToFile from './logToFile.js';

export let logLevel = 3; // Default to INFO
export let consoleFormat = classic; // Default to classic

const config = {
  /**
   * Set the log level to output to the console. Logs warning if the level is not valid.
   * @param {0 | 1 | 2 | 3 | 4 | "SILENT" | "ERROR" | "WARN" | "INFO" | "DEBUG"} level 
   * @returns {void}
   */
  setLevel: (level) => {
    if (typeof level === 'number') {
      if (level > 4 || level < 0) {
        logger.warn("Invalid log level: " + level + ". Valid levels are 0-4. Log level unchanged.");
      } else {
        logLevel = level;
      }
    } else {
      switch (level.toUpperCase()) {
        case 'SILENT': logLevel = 0; break;
        case 'ERROR': logLevel = 1; break;
        case 'WARN': logLevel = 2; break;
        case 'INFO': logLevel = 3; break;
        case 'DEBUG': logLevel = 4; break;
        default: logger.warn("Invalid log level: " + level + ". Valid levels are SILENT, ERROR, WARN, INFO, DEBUG. Log level unchanged."); break;
      }
    }
  },
  /**
   * Set the format of the console output. Logs warning if the object is undefined.
   * @param {*} obj
   * @returns {void}
   */
  useObject: (obj) => {
    if (obj === undefined) {
      logger.warn("No object provided or object is undefined. Enhancements were not applied.");
    } else if (typeof obj === 'object') {
      try {
        obj.log = logger.info; // Allows enhanced logging to be used on applications using console.log without headache
        obj.info = logger.info;
        obj.warn = logger.warn;
        obj.error = logger.error;
        obj.debug = logger.debug;
      } catch (err) {
        logger.warn("Error applying enhancements to object: " + err);
      }
    }
  },
  /**
   * Set the path for logfiles.
   * @param {string} path path of logfile folder 
   * @returns {void}
   */
  logPath: (path) => {
    if (typeof path !== 'string' || path === '') {
      logger.warn("No path provided or path is undefined. Log stream was not set.");
    }
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
      logger.info("Provided path was not a directory; created log directory: " + path);
    }
    logToFile.openStream(path);
  },
  /**
   * Set the format of the console output. Logs warning if the format is not valid.
   * @param {object | "CLASSIC" | "SHORT" | "SYMBOLS"} format 
   * @returns {void}
   */
  setConsoleFormat: (format) => {
    if (typeof format == 'object') {
      if (format?.debug && format?.info && format?.warn && format?.error) {
        consoleFormat = format;
      } else {
        logger.warn("Invalid console format object provided. Format unchanged.");
      }
    } else {
      switch (format.toUpperCase()) {
        case 'CLASSIC': consoleFormat = classic; break;
        case 'SHORT': consoleFormat = short; break;
        case 'SYMBOLS': consoleFormat = symbols; break;
        default: logger.warn("Invalid console format: " + format + ". Valid formats are CLASSIC, SHORT, SYMBOLS. Console logging format unchanged."); break;
      }
    }
  }
}

export default config