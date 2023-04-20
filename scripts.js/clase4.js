const fs = require('fs')

let readFile = fs.readFileSync('./text.txt', {encoding : 'uft-8'})
console.log(readFile)