import confectionery from '../index.js';
import jest from 'jest-mock';

let errorMessage = "";

beforeAll(() => {
    errorMessage = "";
    jest.spyOn(console, 'error').mockImplementation((message) => {errorMessage = message;});
    jest.spyOn(console, 'warn').mockImplementation((message) => {errorMessage = message;});
});

describe('Logger Configuration', () => {
    test('Logger Level Defaults to 3  (INFO)', () => {
        const logger = confectionery.createLogger("Test_Logger");
        expect(JSON.stringify(logger)).toBe("{\"logLevelConsole\":3,\"logLevelFile\":3,\"consoleFormat\":{},\"name\":\"Test_Logger\"}");
    });

    test('Logger Level Adjusted Successfully', () => {
        const logger = confectionery.createLogger("Test_Logger");
        logger.setLevel(1, 1);
        expect(JSON.stringify(logger)).toBe("{\"logLevelConsole\":1,\"logLevelFile\":1,\"consoleFormat\":{},\"name\":\"Test_Logger\"}");
    });

    test('Logger Level Invalid Input', () => {
        const logger = confectionery.createLogger("Test_Logger");
        // Insufficient Parameters
        logger.setLevel(1);
        expect(JSON.stringify(logger)).toBe("{\"logLevelConsole\":3,\"logLevelFile\":3,\"consoleFormat\":{},\"name\":\"Test_Logger\"}");
        expect(errorMessage).toBe("Please provide both a console and file log level. Log level unchanged.");
        // Invalid Console Level
        logger.setLevel(-1, 4);
        expect(JSON.stringify(logger)).toBe("{\"logLevelConsole\":3,\"logLevelFile\":4,\"consoleFormat\":{},\"name\":\"Test_Logger\"}");
        expect(errorMessage).toBe("Invalid console log level: -1. Valid levels are 0-4. Log level for Console is 3, the default.");
        // Invalid Log File Level
        logger.setLevel(3, 5);
        expect(JSON.stringify(logger)).toBe("{\"logLevelConsole\":3,\"logLevelFile\":3,\"consoleFormat\":{},\"name\":\"Test_Logger\"}");
        expect(errorMessage).toBe("Invalid console log level: 5. Valid levels are 0-4. Log level for Log File is 3, the default.");
    });
});