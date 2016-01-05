var graphicsComponent = require("../components/graphics/bird");
var physicsComponent = require("../components/physics/physics");
var collisionComponent = require("../components/collision/circle");

var Bird = function() {
    var physics = new physicsComponent.PhysicsComponent(this);
    physics.position.y = 0.8;
    physics.acceleration.y = -2;

    var graphics = new graphicsComponent.BirdGraphicsComponent(this);
    var collision = new collisionComponent.CircleCollisionComponent(this, 0.02);
    collision.onCollision = this.onCollision.bind(this);
    
    this.components = {
    	physics: physics,
      graphics: graphics,
      collision: collision
    };
};

Bird.prototype.onCollision = function(entity) {
  console.log("Bird collided with entity:", entity);
  this.components.physics.position.y = 0.5;
  this.components.physics.position.x = 0;
  this.components.physics.velocity.y = 0;
  this.components.physics.acceleration.y = 0;
  this.count = 3;
};

exports.Bird = Bird;