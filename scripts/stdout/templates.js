export const classic = {
    debug: "`{dim [${moment().format('HH:mm:ss:ms')}]} {bold {white DEBUG}}: {gray ${context}}${line}\n`",
    info: "`{dim [${moment().format('HH:mm:ss:ms')}]} {bold {cyan INFO}}:  {gray ${context}}${line}\n`",
    warn: "`{dim [${moment().format('HH:mm:ss:ms')}]} {bold {yellow WARN}}:  {gray ${context}}${line}\n`",
    error: "`{dim [${moment().format('HH:mm:ss:ms')}]} {bold {red ERROR}}: {gray ${context}}${line}\n`"
}

export const short = {
    debug: "`{bold {white DEBUG}}: {gray ${context}}${line}\n`",
    info: "`{bold {cyan INFO}}:  {gray ${context}}${line}\n`",
    warn: "`{bold {yellow WARN}}:  {gray ${context}}${line}\n`",
    error: "`{bold {red ERROR}}: {gray ${context}}${line}\n`"
}

export const symbols = {
    debug: "`{bold {white ?}} {gray ${context}}${line}\n`",
    info: "`{bold {cyan i}} {gray ${context}}${line}\n`",
    warn: "`{bold {yellow !}} {gray ${context}}${line}\n`",
    error: "`{bold {red x}} {gray ${context}}${line}\n`"
}