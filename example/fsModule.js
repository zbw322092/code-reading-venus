const fs = require('fs');
const path = require('path');

let filePath = fs.realpathSync(__filename);
let filePath2 = fs.realpathSync(__dirname);

let filePath3 = fs.realpathSync(__filename, 'buffer');

let filePath4 = fs.realpathSync(path.join(__dirname,'fsModuleSLink.js'));

process.stdout.write(__dirname + '\n');
process.stdout.write(filePath + '\n');
process.stdout.write(filePath2 + '\n');

console.log(filePath3);
process.stdout.write(filePath3 + '\n'); // process.stdout.write will auto convert buffer to utf-8 string

process.stdout.write(filePath4 + '\n');



