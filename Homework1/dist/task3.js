'use strict';

var _task = require('./task1');

var task1 = _interopRequireWildcard(_task);

var _task2 = require('./task2');

var task2 = _interopRequireWildcard(_task2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log("------------ Task3 -----------");

task2.convertCSVToText();
task1.runTask1();