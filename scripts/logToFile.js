import moment from 'moment';
import fs from 'fs';

export let logStream;

const logToFile = {
    write: (level, message) => {
        if (logStream !== undefined) {
            logStream.write(`[${moment().format('HH:mm:ss:ms')}] ${level}: ${message}\n`);
        }
    },
    closeStream: () => {
        if (logStream !== undefined) {
            logStream.end();
        }
    },
    openStream: (path) => {
        logStream = fs.createWriteStream(path + 'log_' + moment().format(`YYYY-MM-DD`) + '.log', {flags: 'a'});
        logStream.write(`--- [ New Session Started : ${moment().format('YYYY-MM-DD HH:mm:ss')} ] ---\n`);
    }
}

export default logToFile;