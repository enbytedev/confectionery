import confectionery from '../src/index.js';
import jest from 'jest-mock';

let errorMessage = "";

beforeAll(() => {
    errorMessage = "";
    jest.spyOn(console, 'error').mockImplementation((message) => {errorMessage = message;});
    jest.spyOn(process.stdout, 'write').mockImplementation((message) => {errorMessage = message;});
});

test('Print Without a Logger With Invalid Format', () => {
    confectionery.customPrint("Test Message");
    expect(errorMessage).toBe("confectionery customPrint requires a format function");
});

test('Print Without a Logger', () => {
    confectionery.customPrint((arg1, arg2, arg3) => { return `${arg1} ${arg2} ${arg3}\n`}, "ARGUMENT 1", "ARGUMENT 2", "ARGUMENT 3");
    expect(errorMessage).toBe("ARGUMENT 1 ARGUMENT 2 ARGUMENT 3\n");
});