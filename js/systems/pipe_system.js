var timer = require('./systems/timer');

var Pipe = require('../entities/entities_pipe');

var PipeSystem = function(entities) {
  this.entities = entities;
  this.timer = 1;
  this.status = 0;
};

SpawnPipeSystem.prototype.run = function() {
  // Run the update loop
  this.timer = new timer.SetTimer(this.tick.bind(this), 2000);
  this.status = 1;
};

SpawnPipeSystem.prototype.pause = function() {
  // Pause
  this.timer.pause();
  this.status = 0;
};

SpawnPipeSystem.prototype.resume = function() {
  // Resume
  this.timer.resume();
  this.status = 1;
};

SpawnPipeSystem.prototype.tick = function() {
  if (this.status == 1) {
    this.entities.push(new Pipe.PipeTop(), new Pipe.PipeBottom());
  } else {
    console.log("NO PIPES YO.");
  }
};

exports.PipeSystem = PipeSystem;