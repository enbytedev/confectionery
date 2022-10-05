import moment from 'moment';
import fs from 'fs';

const streamHandler = {
    /**
     * Write a log message to file with the current stream.
     * @param {object} logStream The log stream.
     * @param {string} level The level of the message.
     * @param {string} message The message to write to the file.
     */
    write: (logStream, level, message) => {
        if (typeof logStream === 'object') {
            logStream.write(`[${moment().format('HH:mm:ss:ms')}] ${level}: ${message}\n`);
        }
    },
    /**
     * Close the current log stream.
     * @param {object} logStream The log stream.
     */
    closeStream: (logStream) => {
        if (typeof logStream === 'object') {
            logStream.end();
        }
    },
    /**
     * Open a write stream to a log file.
     * @param {string} path Path for the log file folder.
     * @param {string} loggerName The name of the logger instance.
     */
    openStream: (path, loggerName) => {
        let logStream = fs.createWriteStream(path + loggerName + "_" + moment().format(`YYYY-MM-DD`) + '.log', { flags: 'a' });
        logStream.write(`--- [ New Session Started : ${loggerName} @ ${moment().format('YYYY-MM-DD HH:mm:ss')} ] ---\n`);
        return logStream;
    }
}

export default streamHandler;