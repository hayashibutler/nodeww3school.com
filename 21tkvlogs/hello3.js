function Person(){
    this.message = "Hello3 word",
    this.sayHello = function() {
        console.log(this.message)
    }
}
module.exports = new Person()