console.log("pipe entity is working");

var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var Pipe = function() {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 2;
    physics.acceleration.y = -1;

    var graphics = new graphicsComponent.PipeGraphicsComponent(this);
    
    this.components = {
    	physics: physics,
        graphics: graphics
    };
};

exports.Pipe = Pipe;