var express = require("express")

var app = express();
var bodyParser = require('body-parser')
var port = 3000;

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// create application/json parser
var jsonParser = bodyParser.json()

app.use("/", function(req, res, next) {
  console.log('Request URL: ', req.url);
  req.requestTime = new Date();
  next();
})

app.use("/public", express.static(__dirname +"/public"))
app.set('view engine', 'ejs') // dung ejs sau khi cai vao trong express

app.get("/", function(req, res) {
  res.render('index');
});
app.get("/api", function(req, res) {
  res.json({
    lname: "hoa",
    fname: "mai"
  })
})

app.get("/user/:id", function(req, res){
  // req.query.qstr
  res.render('user', { ID : req.params.id, queryString: req.query.qstr}) //http://localhost:3000/user/maihoa?qstr=1234
})

app.post("/login", urlencodedParser, function(req, res){
  res.send("welcom " + req.body.username)
  console.log(req.body.username);
  console.log(req.body.password)
})

app.post("/loginjson", jsonParser, function(req, res){
  res.send("OK");
  console.log(req.body.firstName);
  console.log(req.body.lastName);
})

app.listen(port, function(){
  console.log("sever: http://localhost:3000")
})