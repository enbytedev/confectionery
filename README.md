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
**The following example is the default assignment.** It is recommended that a developer uses `confectionary.config.useObject(console);`, demonstrated later.
```js
confectionary.log.debug('This is output as DEBUG if log level is debug (4)');
confectionary.log.info('This is output as INFO');
confectionary.log.warn('This is output as WARN');
confectionary.log.error('This is output as ERROR');
```

----
### Log Levels
A log level allows you to specify what gets printed to the console.

Example of setting a log level,
`confectionary.config.setLevel("debug");`
or
`confectionary.config.setLevel(4);`

The following are provided log levels:
|Level|#|Default|
|--|--|--|
|SILENT|0|
|ERROR|1|
|WARN|2|
|INFO|3|X
|DEBUG|4|

----
### Replace Objects
confectionary also allows you to replace the default console object to provide easy implementation and maximum compatibility:

For example, `confectionary.config.useObject(console);` allows the following:
```js
console.log("This is output as INFO");
console.info("This is output as INFO");
console.warn("This is output as WARN");
console.error("This is output as ERROR");
console.debug("This is output as DEBUG");
```

----
### Log Files
confectionary allows you to save logs to files. By default, this is disabled. To enable it, provide a directory to save logfiles in.
For example, `confectionary.config.logPath('logs/');`

----
### Console Formats
Developers may provide a preferred format to use when logging in the console.
For example, `confectionary.config.setConsoleFormat('classic');`.
Default templates (classic, short, symbols) can be found in `scripts/templates.js`

Since version 0.2.0, custom formats are now supported. Simply use `confectionary.config.setConsoleFormat();` with an object. 
This object must contain debug, info, warn, and error. 
Each message line is printed in `${line}` and context in `${context}`. 
Moment can be used to format a timestamp. For example,
```js
const customClassic = {
    debug: "`[${moment().format('HH:mm:ss:ms')}]`.gray+` CUSTOM DEBUG > `.white.bold+`${context}`.gray.bold+`${line}\n`.gray",
    info: "`[${moment().format('HH:mm:ss:ms')}]`.gray+` CUSTOM INFO  > `.cyan.bold+`${context}`.gray.bold+`${line}\n`.gray",
    warn: "`[${moment().format('HH:mm:ss:ms')}]`.gray+` CUSTOM WARN  > `.yellow.bold+`${context}`.gray.bold+`${line}\n`.gray",
    error: "`[${moment().format('HH:mm:ss:ms')}]`.gray+` CUSTOM ERROR > `.red.bold+`${context}`.gray.bold+`${line}\n`.gray"
}
confectionary.config.setConsoleFormat(customClassic);
```
Note: confectionery does NOT automatically add line breaks. Please use `\n` when designing formats.