const fs = require('fs')


createFile = () => {
    fs.writeFile('info.txt', 'Hello, World!', (err) => {
        if (err) {
            console.error(err)
            } else {
                console.log('file was created')
                readFile()

                }
                })
}
readFile = () => {
    fs.readFile('info.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error('error reading file',err)
            } else {
                console.log(data)
                }
                })
}

createFile()