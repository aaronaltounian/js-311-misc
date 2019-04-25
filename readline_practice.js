// Create a node program that can save a file using readline and fs:

const readline = require('readline');
const fs = require('fs');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('file name? \n', (fileName) => {
    rl.question('what should be in the file? \n', (fileContent) => {
        fs.writeFile(fileName, fileContent, (err) => {
            if(err) throw err;
            console.log('The file was successfully saved!');
        })
    })
})