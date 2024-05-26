var events = require('events')
var eventEmitter = new events.EventEmitter();



eventEmitter.on("shout", function(){
    console.log("shouting")
})
eventEmitter.emit("shout")