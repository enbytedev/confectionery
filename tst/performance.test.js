import confectionery from '../src/index.js';
import jest from 'jest-mock';

let errorMessage = "";
const logger = confectionery.createLogger("Logger");

beforeAll(() => {
    errorMessage = "";
    jest.spyOn(console, 'error').mockImplementation((message) => {errorMessage = message;});
});

describe('Operations Take <1ms', () => {
    let before = 0;
    beforeEach(() => {
        before = process.hrtime();
    });
    afterEach(() => {
        let after = process.hrtime(before);
        let latency = (after[0] * 1e9 + after[1]) / 1e6;
        expect(latency).toBeLessThan(1);
    });

    test('Create Logger', () => {
        let testLogger = confectionery.createLogger("Test_Logger");
    });

    test('Set Log Level', () => {
        logger.setLevel(0, 1);
    });

    test('Info Message', () => {
        logger.info("This is a test info message.", "Info");
    });

    test('Error Message', () => {
        logger.error("Test", "Error");
    });


});