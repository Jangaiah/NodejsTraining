"use strict";

var _csvtojson = require("csvtojson");

var csv = _interopRequireWildcard(_csvtojson);

var _fs = require("fs");

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var csvFilePath = "./csv/Hw1_Data2.csv";
var outputFilePath = "./output/data.txt";
var readStream = fs.createReadStream(csvFilePath);

function convertCSVToText() {
	console.log("---------- Task2: Converting csv to text --------");
	csv.csv({ delimiter: 'auto' }).fromStream(readStream).on('data', function (data) {
		fs.appendFile(outputFilePath, data.toString('utf8'), function () {});
	}).on('error', function (err) {
		console.log(err);
	});
}

module.exports.convertCSVToText = convertCSVToText;