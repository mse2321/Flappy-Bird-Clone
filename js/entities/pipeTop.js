var graphicsComponent = require('../components/graphics/pipe');
var physicsComponent = require('../components/physics/physics');

var PipeTop = function() {
	this.name = "Pipe Top";
  	this.color = 'green';

	this.size = {
	    x: 0.2,
	    y: 0.4
  	};

    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.x = 1.5;
    physics.position.y = 0.6;
    physics.velocity.x = -0.5;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    
    this.components = {
    	physics: physics,
        graphics: graphics
    };
};


exports.PipeTop = PipeTop;
