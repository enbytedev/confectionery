import logger from './logger.js';
export let logLevel = 3; // Default to INFO

const config = {
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
    }
}

export default config