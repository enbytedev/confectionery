import moment from 'moment';
import colors from 'colors';

import { logLevel } from './config.js';

const log = {
    debug: (message) => {
        if (logLevel >= 4) { process.stdout.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` DEBUG > `.gray.bold+`${message}\n`.gray); };
    },
    info: (message) => {
        if (logLevel >= 3) { process.stdout.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` INFO  > `.cyan.bold+`${message}\n`.gray); };
    },
    warn: (message) => {
        if (logLevel >= 2) { process.stdout.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` WARN  > `.yellow.bold+`${message}\n`.gray); }
    },
    error: (message) => {
        if (logLevel >= 1) { process.stdout.write(`[${moment().format('YYYY-MM-DD HH:mm:ss:ms')}]`.gray+` ERROR > `.red.bold+`${message}\n`.gray); }
    }
}

export default log