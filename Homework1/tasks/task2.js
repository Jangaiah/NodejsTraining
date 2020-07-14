const csv = require("csvtojson");
const fs = require('fs');
const csvFilePath = "./csv/Hw1_Data2.csv"
const outputFilePath = "./output/data.txt";
const readStream = fs.createReadStream(csvFilePath);

csv({delimiter:'auto'})
.fromStream(readStream)
.on('data',(data)=>{
	fs.appendFile(outputFilePath,data.toString('utf8'),() => {});
})
.on('error',(err)=>{
	console.log(err)
});
