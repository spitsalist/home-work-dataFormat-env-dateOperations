const fs = require('fs')
const path = require('path')

fs.mkdir('myFolder', ( err) => {
    if(err) {
        console.log(err, 'folder already exists')
    }else {
        console.log('Folder created')

    }
})
folderPath = path.join(__dirname, 'myFolder');

fs.rmdir(folderPath, (err) => {
    if(err) {
        console.log(err)
    }else {
        console.log('Folder deleted successfully')
    }
}) 
