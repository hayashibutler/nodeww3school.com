function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

// Emitter.prototype.emit = function(type){
//     if (this.events[type]) {
//         this.events[type].forEach(function(listener) {
//             listener();
//         });
//     } else console.log("chua cap nhat thong bao")
// }

Emitter.prototype.emit = function(type){
    if (this.events[type]) {
        this.events[type].forEach(function(listener){
            console.log(listener)
        })
    } else console.log("chua cap nhat thong bao")
}
module.exports = Emitter;