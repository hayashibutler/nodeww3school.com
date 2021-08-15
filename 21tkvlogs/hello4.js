function Person(){
    this.message = "Hello4 word",
    this.sayHello = function() {
        console.log(this.message)
    }
}
module.exports = Person;