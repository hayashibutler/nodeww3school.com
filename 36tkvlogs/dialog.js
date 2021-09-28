'use strict'

var EventEmitter = require("events");

module.exports = class Dialog extends EventEmitter {
    constructor(){
        super();
        this.message = "Hello world"
    }
    sayHello(data){
        console.log(`${this.message}: ${ data }`);
        this.emit("hello", data)
    }
}