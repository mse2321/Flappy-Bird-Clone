var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var Ceiling = function() {
  this.name = 'Ceiling';
  this.color = 'brown';
  this.size = {
    x: 1,
    y: 0.02
  };

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = 0;
  physics.position.y = 1;

  var graphics = new graphicsComponent.PipeGraphicsComponent(this);

  this.components = {
    physics: physics,
    graphics: graphics,
  };
};


exports.Ceiling = Ceiling;