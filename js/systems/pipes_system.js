//var graphicsComponent = require("../components/graphics/pipe");
var Pipe = require('../entities/entities_pipe');
//var physicsComponent = require("../components/physics/physics");

var pipeSystem = function(entities) {
    this.entities = entities;
};

pipeSystem.prototype.run = function() {

  // Run the update loop
  window.setInterval(this.tick.bind(this), 4000);
};

pipeSystem.prototype.tick = function() {
    console.log('In PipesSystem');
	var pipeBottom = new pipe.Pipe({ x: 1, y: 0 });
	var pipeTop = new pipe.Pipe({ x: 1, y: 0.6 });
	
	this.entities.push(pipeBottom, pipeTop);
};

exports.pipeSystem = pipeSystem;