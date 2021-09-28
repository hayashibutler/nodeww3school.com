var express = require("express")

var app = express();

var port = 3000;

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
  res.render('user', { ID : req.params.id})
})

app.listen(port, function(){
  console.log("sever: http://localhost:3000")
})