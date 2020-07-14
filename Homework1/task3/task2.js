import * as csv from "csvtojson";
import * as fs from "fs";
const csvFilePath = "./csv/Hw1_Data2.csv"
const outputFilePath = "./output/data.txt";
const readStream = fs.createReadStream(csvFilePath);

function convertCSVToText(){
	console.log("---------- Task2: Converting csv to text --------")
	csv.csv({delimiter:'auto'})
	.fromStream(readStream)
	.on('data',(data)=>{
		fs.appendFile(outputFilePath,data.toString('utf8'),() => {});
	})
	.on('error',(err)=>{
		console.log(err)
	});
}

module.exports.convertCSVToText = convertCSVToText;
