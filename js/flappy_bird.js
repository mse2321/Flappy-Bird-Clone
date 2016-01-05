var graphicsSystem = require('./systems/graphics');
var physicsSystem = require('./systems/systems_physics');
var inputSystem = require('./systems/input');
var pipeSystem = require('./systems/pipe_system');
var collisionSystem = require('./systems/collision');
var timer = require('./systems/timer');

var bird = require('./entities/entities_bird');
var pipeTop = require('./entities/pipeTop');
var pipeBottom = require('./entities/pipeBottom');
var floor = require('./entities/floor');
var ceiling = require('./entities/ceiling');
var pipeDestroyer = require('./entities/pipeDestroyer');

var FlappyBird = function() {
    this.status = 0; //0-idle 1-running 2-paused
    this.entities = [new floor.Floor(), new ceiling.Ceiling(), new bird.Bird(), new pipeDestroyer.PipeDestroyer()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
    this.physics = new physicsSystem.PhysicsSystem(this.entities);
    this.pipes = new pipeSystem.PipeSystem(this.entities);
    this.input = new inputSystem.InputSystem(this.entities);
    this.collision = new collisionSystem.CollisionSystem(this.entities);
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

/* 
document.addEventListener('DOMContentLoaded', function() {
    var app = new FlappyBird();
    app.run();
});
*/


// ON LOAD OF PAGE, RUN THE APP
document.addEventListener('DOMContentLoaded', function() {
  var app = new FlappyBird();
  app.start();
// WHEN THE PAGE IS CLICKED, START THE GAME
  var start = document.getElementById('start');
  start.addEventListener('click', function(){
    this.className = "hidden";
    app.status = 1;
    app.run();
  });
// WHEN SPACE IS HIT, PAUSE THE GAME
  document.addEventListener('keydown', function(e){
    if (e.keyCode == 32) {
      if(app.status == 1) {
        app.pause();
      } else if (app.status ==2) {
        app.resume();
      }
    }
  });
// WHEN PAUSE BUTTON IS PRESSED, PAUSE THE GAME
  var pause = document.getElementById('pauseButton');
  pause.addEventListener('click', function(){
    if(app.status == 1) {
      app.pause();
    } else if (app.status ==2) {
      app.resume();
    }
  });

// WHEN PAUSE BUTTON IS PRESSED, RESUME THE GAME
  var resume = document.getElementById('resume');
  resume.addEventListener('click', function(){
    if(app.status == 1) {
      app.pause();
    } else if (app.status ==2) {
      app.resume();
    }
  });
  
// IF USER HASN'T CLICKED, THROW SOME ACCELERATION ON THEM PRIOR TO FIRST PIPE.
  var bird = app.entities[2];
  window.setInterval(function() {
    if (bird.components.physics.acceleration.y !== -1.5){
      bird.components.physics.acceleration.y = -1.5;
    }
  },3000);
});

exports.FlappyBird = FlappyBird;
