import confectionery from '../src/index.js';
import jest from 'jest-mock';
import fs from 'fs';

let errorMessage = "";

beforeAll(() => {
    errorMessage = "";
    jest.spyOn(console, 'error').mockImplementation((message) => {errorMessage = message;});
});

test('Open Log Stream for New File', () => {
    const logStream = {
        write: jest.fn().mockReturnThis(),
    };
    jest.spyOn(fs, 'createWriteStream').mockReturnValueOnce(logStream);

    const logger = confectionery.createLogger("Test_Logger");
    logger.setLogPath('./logs/');
    expect(fs.createWriteStream).toBeCalledTimes(1);
    expect(logStream.write).toBeCalledTimes(1);
});

test('Write to Log Stream With Proper Level', () => {
    const logStream = {
        write: jest.fn().mockReturnThis(),
    };
    jest.spyOn(fs, 'createWriteStream').mockReturnValueOnce(logStream);
    
    const logger = confectionery.createLogger("Test_Logger");
    logger.setLogPath('./logs/');
    logger.setLevel(0, 1);
    logger.log("This should NOT be written");
    logger.error("This SHOULD be written");
    expect(logStream.write).toBeCalledTimes(2);
});