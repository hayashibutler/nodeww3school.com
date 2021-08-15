var fs = require('fs');
var readStream = fs.createReadStream('./demofile.txt');
// vuet console khi file mo
readStream.on('open', function() {
	console.log('The file is open')
})