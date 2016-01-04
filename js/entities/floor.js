var graphicsComponent = require("../components/graphics/pipe");
var physicsComponent = require("../components/physics/physics");

var Floor = function() {
  this.name = 'floor';
  this.color = 'rgb(99,71,48)';
  this.size = {
    x: (document.getElementById('main-canvas').width),
    y: 0.02
  };

  var physics = new physicsComponent.PhysicsComponent(this);
  physics.position.x = -(document.getElementById('main-canvas').width)/2;
  physics.position.y = 0;

  var graphics = new graphicsComponent.PipeGraphicsComponent(this);

  this.components = {
    physics: physics,
    graphics: graphics,
  };
};

exports.Floor = Floor;