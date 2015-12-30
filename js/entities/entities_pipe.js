console.log("pipe entity is working");

var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var Pipe = function() {

	this.name = "Pipe";
  	this.color = 'green';

	this.size = {
	    x: 0.2,
	    y: 0.4
  	};

    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.x = 1.5;
    physics.position.y = 0.5;
    physics.velocity.y = -0.5;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    
    this.components = {
    	physics: physics,
        graphics: graphics
    };
};

/*
var pipeTop = new Pipe();
pipeTop.name = "pipeTop";
pipeTop.physics.position.x = 1.5;
pipeTop.physics.position.y = 0.5;
pipeTop.physics.velocity.y = -0.5;

var pipeBottom = new Pipe();
pipeBottom.name = "pipeBottom";
pipeBottom.physics.position.x = 0.5;
pipeBottom.physics.position.y = -0.5;
pipeBottom.physics.velocity.y = -0.5;


exports.pipeTop = pipeTop;
exports.pipeBottom = pipeBottom;

*/

exports.Pipe = Pipe;