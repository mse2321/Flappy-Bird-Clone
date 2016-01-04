var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/systems_physics');
var inputSystem = require('./systems/input');
var pipeSystem = require('./systems/pipe_system');
var timer = require('./systems/timer');

var bird = require('./entities/entities_bird');
var pipeTop = require('./entities/pipeTop');
var pipeBottom = require('./entities/pipeBottom');
var floor = require('./entities/floor');
var ceiling = require('./entities/ceiling');
//var pipeDestroyer = require('./entities/pipeDestroyer');

var FlappyBird = function() {
    this.status = 0; //0-idle 1-running 2-paused
    //this.entities = [new floor.Floor(), new ceiling.Ceiling(), new bird.Bird(), new pipeDestroyer.PipeDestroyer()];
    this.entities = [new floor.Floor(), new ceiling.Ceiling(), new bird.Bird()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities);
    this.pipes = new pipeSystem.PipeSystem(this.entities);
    this.input = new inputSystem.InputSystem(this.entities);
};

// LOAD THE START OF THE APP
FlappyBird.prototype.start = function(){
  this.graphics.base();
  this.status = 0;
};

FlappyBird.prototype.run = function() {
    this.graphics.run();
    this.physics.run();
    this.input.run();
    this.pipes.run();
    this.status = 1;
};

//Pause the game
FlappyBird.prototype.pause = function() {
  this.graphics.pause();
  this.physics.pause();
  this.pipes.pause();
  this.status = 2;
};

//Resume the game
FlappyBird.prototype.resume = function() {
  this.graphics.run();
  this.physics.resume();
  this.pipes.resume();
  this.status = 1;
};


/* main.js */

document.addEventListener('DOMContentLoaded', function() {
    var app = new FlappyBird();
    app.run();
});

exports.FlappyBird = FlappyBird;
