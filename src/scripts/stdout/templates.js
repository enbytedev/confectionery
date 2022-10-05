export const classic = {
    debug: function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {white DEBUG}}: {gray ${context}}${line}\n`},
    info: function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {cyan INFO}}:  {gray ${context}}${line}\n`},
    warn: function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {yellow WARN}}:  {gray ${context}}${line}\n`},
    error: function handle(moment, context, line) { return `{dim [${moment().format('HH:mm:ss:ms')}]} {bold {red ERROR}}: {gray ${context}}${line}\n`}
}

export const short = {
    debug: function handle(moment, context, line) { return `{bold {white DEBUG}}: {gray ${context}}${line}\n`},
    info: function handle(moment, context, line) { return `{bold {cyan INFO}}:  {gray ${context}}${line}\n`},
    warn: function handle(moment, context, line) { return `{bold {yellow WARN}}:  {gray ${context}}${line}\n`},
    error: function handle(moment, context, line) { return `{bold {red ERROR}}: {gray ${context}}${line}\n`}
}

export const symbols = {
    debug: function handle(moment, context, line) { return `{bold {white ?}} {gray ${context}}${line}\n`},
    info: function handle(moment, context, line) { return `{bold {cyan i}} {gray ${context}}${line}\n`},
    warn: function handle(moment, context, line) { return `{bold {yellow !}} {gray ${context}}${line}\n`},
    error: function handle(moment, context, line) { return `{bold {red x}} {gray ${context}}${line}\n`}
}