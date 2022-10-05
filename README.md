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
For example, `const console = confectionary.createLogger("Console");` allows the following:
```js
console.log("This is output as INFO");
console.info("This is output as INFO", "Optional Context");
console.warn("This is output as WARN");
console.error("This is output as ERROR", "Optional Context");
console.debug("This is output as DEBUG");
```
**You can have multiple logger instances at a time.**

----
### Log Levels
A log level allows you to specify what gets printed to the console.

Example of setting a log level,
`logger.setLevel("debug");`
or
`logger.setLevel(4);`

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
For example, `logger.setConsoleFormat('classic');`.
Default templates (classic, short, symbols) can be found in `scripts/stdout/templates.js`

Custom formats are also supported. Simply use `logger.setConsoleFormat();` with an object. 
This object must contain debug, info, warn, and error. 
Each message line is printed in `${line}` and context in `${context}`. 
Moment can be used to format a timestamp. For example,
```js
const customClassic = {
    debug: "`{dim [${moment().format('HH:mm:ss:ms')}]} {bold {white DEBUG}}: {gray ${context}}${line}\n`",
    info: "`{dim [${moment().format('HH:mm:ss:ms')}]} {bold {cyan INFO}}:  {gray ${context}}${line}\n`",
    warn: "`{dim [${moment().format('HH:mm:ss:ms')}]} {bold {yellow WARN}}:  {gray ${context}}${line}\n`",
    error: "`{dim [${moment().format('HH:mm:ss:ms')}]} {bold {red ERROR}}: {gray ${context}}${line}\n`"
}
logger.setConsoleFormat(customClassic);
```
Note: confectionery does NOT automatically add line breaks. Please use `\n` when designing formats.