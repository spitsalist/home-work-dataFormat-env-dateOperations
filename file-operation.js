const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config()

const filename = process.env.FILENAME

fs.readFile(__dirname + '/' + filename, 'utf-8', (err, data) => {
if (err) {
    console.log('cannot read file',err)
    } else {
        console.log(data)
    }
    })