var Dialog = require("./dialog")

var dialog = new Dialog();

dialog.on("hello", function(data){
    console.log("Co 1 loi chao, "+data)
})

dialog.sayHello("Hoa")