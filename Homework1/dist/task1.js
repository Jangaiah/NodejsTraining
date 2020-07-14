'use strict';

function runTask1() {
  console.log("------------ Task1: String reverse -----------");
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', function () {
    var chunk = void 0;
    while ((chunk = process.stdin.read()) !== null) {
      process.stdout.write(chunk.replace(/\n/, '').split('').reverse().join('') + '\n\n');
    }
  });
}

module.exports.runTask1 = runTask1;