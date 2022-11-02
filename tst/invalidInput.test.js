import confectionery from '../src/index.js';
import jest from 'jest-mock';

const logger = confectionery.createLogger("Test_Logger");

let errorMessage = "";

beforeEach(() => {
    errorMessage = "";
    jest.spyOn(process.stdout, 'write').mockImplementation((message) => {errorMessage = message;});
});

test('Valid Input', () => {
    logger.error("This is a test info message.", "Info");
    expect(errorMessage).toMatch(/This is a test info message/);
});

test('Object Input', () => {
    logger.error({test: "test"}, "Info");
    expect(errorMessage).toBe("");
});
