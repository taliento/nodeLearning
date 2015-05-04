var fs = require('fs')
var pathToFile = process.argv[2];
var buffer = fs.readFileSync(pathToFile);
var lines = buffer.toString().split('\n');
console.log(lines.length-1);

