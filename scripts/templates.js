export const classic = {
    debug: "`[${moment().format('HH:mm:ss:ms')}]`.gray+` DEBUG > `.white.bold+`${context}`.gray.bold+`${line}\n`.gray",
    info: "`[${moment().format('HH:mm:ss:ms')}]`.gray+` INFO  > `.cyan.bold+`${context}`.gray.bold+`${line}\n`.gray",
    warn: "`[${moment().format('HH:mm:ss:ms')}]`.gray+` WARN  > `.yellow.bold+`${context}`.gray.bold+`${line}\n`.gray",
    error: "`[${moment().format('HH:mm:ss:ms')}]`.gray+` ERROR > `.red.bold+`${context}`.gray.bold+`${line}\n`.gray"
}

export const short = {
    debug: "`DEBUG: `.white.bold+`${context}`.gray.bold+`${line}\n`.gray",
    info: "`INFO:  `.cyan.bold+`${context}`.gray.bold+`${line}\n`.gray",
    warn: "`WARN:  `.yellow.bold+`${context}`.gray.bold+`${line}\n`.gray",
    error: "`ERROR: `.red.bold+`${context}`.gray.bold+`${line}\n`.gray"
}

export const symbols = {
    debug: "`? `.white.bold+`${context}`.gray.bold+`${line}\n`.gray",
    info: "`i `.cyan.bold+`${context}`.gray.bold+`${line}\n`.gray",
    warn: "`! `.yellow.bold+`${context}`.gray.bold+`${line}\n`.gray",
    error: "`x `.red.bold+`${context}`.gray.bold+`${line}\n`.gray"
}