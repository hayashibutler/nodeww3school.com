var Emitter = require("./emitter");

var emitter = new Emitter();

// emitter.on("bad", function() {
//     console.log("Mot mon nao do bi diem kem!")
// })

// emitter.on("bad", function(){
//     console.log("Diem kem, can thong bao den phu huynh")
// })

emitter.on("bad","Mot mon nao do diem kem")
emitter.on("bad","thong bao phu huynh")

var score = [10,4];
for(var s of score) {
    if(s < 5) {
        console.log("Diem qua thap");
        emitter.emit("bad")
    }
}
