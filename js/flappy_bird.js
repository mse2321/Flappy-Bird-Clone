var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/systems_physics');
var inputSystem = require('./systems/input');
var pipeSystem = require('./systems/pipes_system');

var bird = require('./entities/entities_bird');
var pipe = require('./entities/entities_pipe');

var FlappyBird = function() {
    //this.entities = [new bird.Bird(), new pipe.pipeTop(), new pipe.pipeBottom()];
    this.entities = [new bird.Bird(), new pipe.Pipe()];
    //this.entities = [new pipe.Pipe()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities);
    this.input = new inputSystem.InputSystem(this.entities);
    this.pipes = new pipeSystem(this.entities);
};

FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();
    this.pipes.run();
};

/* main.js */

document.addEventListener('DOMContentLoaded', function() {
    var app = new FlappyBird();
    app.run();
});

exports.FlappyBird = FlappyBird;
