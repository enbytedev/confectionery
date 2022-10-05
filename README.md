<p align="center">
  <a><img src="https://github.com/enbytedev/confectionery/blob/main/ICON.png" width="250" height="250" /></a>

  <h3 align="center">✨ confectionery ✨</h3>
 <p align="center"><i>creating easy, practical logging with instant implementation. this is the icing to your metaphorical cake!</i></p>
</p>
  <p align="center">
    <a href="https://github.com/enbytedev/confectionery">
      <img alt="GitHub Repo Stars" src="https://img.shields.io/github/stars/enbytedev/confectionery?style=for-the-badge">
    </a>
    <a href="https://github.com/enbytedev/confectionery/blob/main/LICENSE">
      <img alt="License" src="https://img.shields.io/github/license/enbytedev/confectionery?style=for-the-badge&color=AA4A44" />
    </a>
  <hr>
</p>

```
npm i confectionery
```

### Logger
For example, `const logger = confectionary.createLogger("Logger");` allows the following:
```js
logger.log("This is output as INFO");
logger.info("This is output as INFO", "Optional Context");
logger.warn("This is output as WARN");
logger.error("This is output as ERROR", "Optional Context");
logger.debug("This is output as DEBUG");
```
You can also assign it to the existing console object: `console = confectionary.createLogger("Replacement_Console");`

**You can have multiple logger instances at a time.**

----
### Log Levels
A log level allows you to specify what gets printed to the console and logfiles.

In the below example, the console is set to debug and the logfile is set to error.
`logger.setLevel("debug", "error");`
In the below example, the both the console and the logfile are set to info.
`logger.setLevel(3, 3);`

The following are provided log levels:
|Level|#|Default|
|--|--|--|
|SILENT|0|
|ERROR|1|
|WARN|2|
|INFO|3|X
|DEBUG|4|

----
### Log Files
confectionary allows you to save logs to files. By default, this is disabled. To enable it, provide a directory to save logfiles in.
For example, `logger.setLogPath('./logs/');`

----
### Console Formats
Developers may provide a preferred format to use when logging in the console.
For example, `logger.setFormat('classic');`.
Default templates (classic, short, symbols) can be found in `scripts/stdout/templates.js`

Custom formats are also supported. Simply use `logger.setFormat();` with an object. 
This object must contain functions that return debug, info, warn, and error. 
Each message line is printed in `${line}` and context in `${context}`. 
Moment can be used to format a timestamp. For example,
```js
const customClassic = {
    debug: function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {white DEBUG}}: {gray ${context}}${line}\n`},
    info: function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {cyan INFO}}:  {gray ${context}}${line}\n`},
    warn: function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {yellow WARN}}:  {gray ${context}}${line}\n`},
    error: function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {red ERROR}}: {gray ${context}}${line}\n`}
}
logger.setFormat(customClassic);
```
Note: confectionery does NOT automatically add line breaks. Please use `\n` when designing formats.