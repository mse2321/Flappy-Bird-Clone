var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var PipeBottom = function() {
  this.name = 'Pipe Bottom';
  this.color = 'green';

  this.size = {
    x: 0.2,
    y: 0.4
  };

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = 1.5;
  physics.position.y = 0;
  physics.velocity.x = -0.5;

  var graphics = new graphicsComponent.PipeGraphicsComponent(this);

  this.components = {
    physics: physics,
    graphics: graphics,
  };
};

exports.PipeBottom = PipeBottom;