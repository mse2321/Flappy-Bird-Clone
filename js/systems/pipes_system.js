//var graphicsComponent = require("../components/graphics/pipe");
var Pipe = require('../entities/entities_pipe');
//var physicsComponent = require("../components/physics/physics");

var pipeSystem = function(entities) {
    this.entities = entities;
};

pipeSystem.prototype.run = function() {
  this.tick();

  // Run the update loop
  window.setInterval(this.tick.bind(this), 2000);
};

pipeSystem.prototype.tick = function() {
    //var gap = 0.4 + Math.random() * 0.2;

  this.entities.push(new Pipe());
};

exports.pipeSystem = pipeSystem;