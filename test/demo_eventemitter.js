var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function() {
	console.log('I hear a cream!');
};

//assign the eventHandler to an event
eventEmitter.on('cream', myEventHandler);

//Goi hanh dong event:
eventEmitter.emit('cream')