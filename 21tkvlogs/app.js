var hello1 = require("./hello1");
hello1();

var hello2a = require("./hello2");
hello2a.sayHello();

var hello2b = require("./hello2").sayHello;
hello2b();

var hello3 = require("./hello3");
hello3.sayHello();

hello3.message = "change hello3 world"
hello3.sayHello()

var Hello4 = require("./hello4");
var hello4 = new Hello4();
hello4.sayHello();

var hello5 = require("./hello5");
hello5.sayHello();