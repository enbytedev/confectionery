import moment from 'moment';
import fs from 'fs';

export let logStream;

const logToFile = {
    /**
     * Write a log message to file with the current stream.
     * @param {string} level 
     * @param {string} message 
     */
    write: (level, message) => {
        if (logStream !== undefined) {
            logStream.write(`[${moment().format('HH:mm:ss:ms')}] ${level}: ${message}\n`);
        }
    },
    /**
     * Close the current log stream.
     */
    closeStream: () => {
        if (logStream !== undefined) {
            logStream.end();
        }
    },
    /**
     * Open a write stream to a log file.
     * @param {string} path 
     */
    openStream: (path) => {
        logStream = fs.createWriteStream(path + 'log_' + moment().format(`YYYY-MM-DD`) + '.log', { flags: 'a' });
        logStream.write(`--- [ New Session Started : ${moment().format('YYYY-MM-DD HH:mm:ss')} ] ---\n`);
    }
}

export default logToFile;