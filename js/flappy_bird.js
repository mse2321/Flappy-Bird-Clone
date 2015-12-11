console.log("flappy bird is working");

var graphicsSystem = require('./systems/graphics');
var bird = require('./entities/bird');
/*var pipe = require('./entities/pipe');*/

var FlappyBird = function() {
    this.entities = [new bird.Bird()];
    /* this.entities = [new pipe.Pipe()]; */
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
};

FlappyBird.prototype.run = function() {
    this.graphics.run();
};

/* main.js */

console.log("main is working");

document.addEventListener('DOMContentLoaded', function() {
    var app = new FlappyBird();
    app.run();
});

exports.FlappyBird = FlappyBird;
