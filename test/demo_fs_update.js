var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'this is my text', function(err) {
	if (err) throw err;
	console.log('updated')
})