var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var PipeDestroyer = function() {
  this.name = 'PipeDestroyer';
  this.color = 'rgb(99,71,48)';
  this.size = {
    x: 0.001,
    y: 1
  };

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = -(document.getElementById('main-canvas').width)/200;
  physics.position.y = 0.1;

  var graphics = new graphicsComponent.PipeGraphicsComponent(this);

  this.components = {
    physics: physics,
    graphics: graphics,
  };
};


exports.PipeDestroyer = PipeDestroyer;