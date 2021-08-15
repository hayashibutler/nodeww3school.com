// var mysql = require('mysql');

// var con = mysql.createConnection({
// 	host: "localhost",
// 	user: "lam.tranledien@gmail.com",
// 	password: "Hayashi@0811"
// });

// con.connect(function(err) {
// 	if (err) throw err;
// 	console.log("Connected")
// }); 

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "lam.tranledien@gmail.com",
  password: "Hayashi@0811"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});