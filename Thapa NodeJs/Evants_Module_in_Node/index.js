const EventEmitter = require('events');

const event = new EventEmitter();

event.on("say name", () => {
    console.log("your name is Tejas");
});


event.emit("say my name");