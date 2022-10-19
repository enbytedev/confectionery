import confectionery from '../src/index.js';
import jest from 'jest-mock';

let errorMessage = "";
const logger = confectionery.createLogger("Test_Logger");

beforeAll(() => {
    errorMessage = "";
    jest.spyOn(console, 'error').mockImplementation((message) => { errorMessage = message; });
    jest.spyOn(console, 'warn').mockImplementation((message) => { errorMessage = message; });
});

describe('Format Logger to Templates', () => {
    test('Symbols Template', () => {
        logger.setFormat("SYMBOLS");
        expect(logger["consoleFormat"]["error"].toString()).toBe("function handle(moment, context, line) { return `{bold {red x}} {gray ${context}}${line}\\n`}");
        expect(logger["consoleFormat"]["warn"].toString()).toBe("function handle(moment, context, line) { return `{bold {yellow !}} {gray ${context}}${line}\\n`}");
        expect(logger["consoleFormat"]["info"].toString()).toBe("function handle(moment, context, line) { return `{bold {cyan i}} {gray ${context}}${line}\\n`}");
        expect(logger["consoleFormat"]["debug"].toString()).toBe("function handle(moment, context, line) { return `{bold {white ?}} {gray ${context}}${line}\\n`}");
    });
    test('Short Template', () => {
        logger.setFormat("SHORT");
        expect(logger["consoleFormat"]["error"].toString()).toBe("function handle(moment, context, line) { return `{bold {red ERROR}}: {gray ${context}}${line}\\n`}");
        expect(logger["consoleFormat"]["warn"].toString()).toBe("function handle(moment, context, line) { return `{bold {yellow WARN}}:  {gray ${context}}${line}\\n`}");
        expect(logger["consoleFormat"]["info"].toString()).toBe("function handle(moment, context, line) { return `{bold {cyan INFO}}:  {gray ${context}}${line}\\n`}");
        expect(logger["consoleFormat"]["debug"].toString()).toBe("function handle(moment, context, line) { return `{bold {white DEBUG}}: {gray ${context}}${line}\\n`}");
    });
    test('Classic Template', () => {
        logger.setFormat("CLASSIC");
        expect(logger["consoleFormat"]["error"].toString()).toBe("function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {red ERROR}}: {gray ${context}}${line}\\n`}");
        expect(logger["consoleFormat"]["warn"].toString()).toBe("function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {yellow WARN}}:  {gray ${context}}${line}\\n`}");
        expect(logger["consoleFormat"]["info"].toString()).toBe("function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {cyan INFO}}:  {gray ${context}}${line}\\n`}");
        expect(logger["consoleFormat"]["debug"].toString()).toBe("function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {white DEBUG}}: {gray ${context}}${line}\\n`}");
    });
    test('Invalid Template Name', () => {
        logger.setFormat("INVALID");
        expect(errorMessage).toBe("Invalid console format: INVALID. Valid formats are CLASSIC, SHORT, SYMBOLS. Console logging format has defaulted to CLASSIC.");
        expect(logger["consoleFormat"]["error"].toString()).toBe("function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {red ERROR}}: {gray ${context}}${line}\\n`}"); // CLASSIC
    });
});

describe('Format Logger to Custom Templates', () => {
    test('Valid Custom Template Object', () => {
        const customFormat = {
            debug: function handle(moment, context, line) { return `{bold {white Custom}} {gray ${context}}${line}\n`},
            info: function handle(moment, context, line) { return `{bold {cyan Custom}} {gray ${context}}${line}\n`},
            warn: function handle(moment, context, line) { return `{bold {yellow Custom}} {gray ${context}}${line}\n`},
            error: function handle(moment, context, line) { return `{bold {red Custom}} {gray ${context}}${line}\n`}
        };
        logger.setFormat(customFormat);
        expect(logger["consoleFormat"]["error"].toString()).toBe("function handle(moment, context, line) { return `{bold {red Custom}} {gray ${context}}${line}\\n`}");
        expect(logger["consoleFormat"]["warn"].toString()).toBe("function handle(moment, context, line) { return `{bold {yellow Custom}} {gray ${context}}${line}\\n`}");
        expect(logger["consoleFormat"]["info"].toString()).toBe("function handle(moment, context, line) { return `{bold {cyan Custom}} {gray ${context}}${line}\\n`}");
        expect(logger["consoleFormat"]["debug"].toString()).toBe("function handle(moment, context, line) { return `{bold {white Custom}} {gray ${context}}${line}\\n`}");
    });

    test('Invalid Custom Template Object', () => {
        const customFormat = {
            debug: function handle(moment, context, line) { return `{bold {white Custom}} {gray ${context}}${line}\n`},
            info: "Not a function..."
        };
        logger.setFormat(customFormat);
        expect(errorMessage).toBe("Invalid console format object provided. Console logging format has defaulted to CLASSIC.");
        expect(logger["consoleFormat"]["error"].toString()).toBe("function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {red ERROR}}: {gray ${context}}${line}\\n`}"); // CLASSIC
    })
});