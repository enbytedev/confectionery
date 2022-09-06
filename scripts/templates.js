export const classic = {
    debug: "`[${moment().format('HH:mm:ss:ms')}]`.gray+` DEBUG > `.gray.bold+`${message}\n`.gray",
    info: "`[${moment().format('HH:mm:ss:ms')}]`.gray+` INFO  > `.cyan.bold+`${message}\n`.gray",
    warn: "`[${moment().format('HH:mm:ss:ms')}]`.gray+` WARN  > `.yellow.bold+`${message}\n`.gray",
    error: "`[${moment().format('HH:mm:ss:ms')}]`.gray+` ERROR > `.red.bold+`${message}\n`.gray"
}

export const short = {
    debug: "`D `.gray.bold+`${message}\n`.gray.italic",
    info: "`I `.cyan.bold+`${message}\n`.gray.italic",
    warn: "`W `.yellow.bold+`${message}\n`.gray.italic",
    error: "`E `.red.bold+`${message}\n`.gray.italic"
}

export const symbols = {
    debug: "`? `.gray.bold+`${message}\n`.gray.italic",
    info: "`i `.cyan.bold+`${message}\n`.gray.italic",
    warn: "`! `.yellow.bold+`${message}\n`.gray.italic",
    error: "`x `.red.bold+`${message}\n`.gray.italic"
}