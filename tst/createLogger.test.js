import confectionery from '../src/index.js';
import jest from 'jest-mock';

let errorMessage = "";

beforeAll(() => {
    errorMessage = "";
    jest.spyOn(console, 'error').mockImplementation((message) => {errorMessage = message;});
});

test('New Logger Created With Proper Name and Defaults', () => {
    const logger = confectionery.createLogger("Test_Logger");
    expect(JSON.stringify(logger)).toBe("{\"logLevelConsole\":3,\"logLevelFile\":3,\"consoleFormat\":{},\"name\":\"Test_Logger\"}");
});

test('New Logger Rejected With Invalid Name', () => {
    const logger = confectionery.createLogger("Test Logger");
    expect(JSON.stringify(logger)).toBe(undefined);
    expect(errorMessage).toBe("The provided name is invalid. Did not create logger instance: Test Logger");
});