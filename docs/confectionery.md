## Logger

The logger utility provides the ability to format messages with a timestamp and level.
----

### Logger
The following example is the default assignment. It is reccommended that a developer uses `confectionary.config.useObject(console);`, demonstrated later.

```js
confectionary.log.debug('This is output as DEBUG if log level is debug (4)');
confectionary.log.info('This is output as INFO');
confectionary.log.warn('This is output as WARN');
confectionary.log.error('This is output as ERROR');
```

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

### Log Files
confectionary allows you to save logs to files. By default, this is disabled. To enable it, provide a directory to save logfiles in.
For example, `confectionary.config.logPath('logs/');`