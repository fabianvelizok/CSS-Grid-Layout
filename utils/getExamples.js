/*
 * Be careful, this code runs on the SERVER and it's used to get example list.
 * Run -> node ./utils/getExamples.js
 */

const fs = require('fs');
const files = fs.readdirSync('./examples');
console.log(files)

